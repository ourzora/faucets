import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { join } from "path";
import { writeFile } from "fs/promises";
import { expect } from "chai";
import {
  ETHFaucet__factory,
  FaucetFactory,
  FaucetFactory__factory,
  FaucetMetadataRenderer,
  FaucetMetadataRenderer__factory,
  PtMonoFont__factory,
  SharedNFTLogic__factory,
  TestERC20,
  TestERC20__factory,
  ZorbNFT__factory,
  ETHFaucet, LinearStrategy, LinearStrategy__factory,
  CliffStrategy__factory, DailyStepStrategy__factory,
  CliffStrategy, DailyStepStrategy
} from '../typechain'
import { parseEther } from "ethers/lib/utils";
import { Contract } from "ethers";

function parseJson(uri: string) {
  const resultJsonStr = Buffer.from(
    uri.substring("data:application/json;base64,".length),
    "base64"
  ).toString("utf-8");
  const resultJson = JSON.parse(resultJsonStr);
  return resultJson;
}

function makeInline(uri: string) {
  return Buffer.from(uri.substring(uri.indexOf(",")), "base64").toString(
    "utf-8"
  );
}

function stringFromBytes(bytes: string) {
  return Buffer.from(bytes.substring(2), "hex").toString("utf-8");
}

describe("FaucetMetadataRenderer", () => {
  const ONE_MONTH = 30 * 24 * 60 * 60;
  let signer: SignerWithAddress;
  let signerAddress: string;
  let signer2: SignerWithAddress;
  let signer2Address: string;
  let faucetFactory: FaucetFactory;
  let testToken: TestERC20;
  let linearStrategy: LinearStrategy;
  let cliffStrategy: CliffStrategy;
  let dailyStepStrategy: DailyStepStrategy;

  beforeEach(async () => {
    signer = (await ethers.getSigners())[0];
    signerAddress = await signer.getAddress();
    signer2 = (await ethers.getSigners())[1];
    signer2Address = await signer2.getAddress();
    const fontDeployer = new PtMonoFont__factory(signer)
    const sharedNFTLogicDeployer = new SharedNFTLogic__factory(signer)
    const zorbDeployer = new ZorbNFT__factory(signer)
    const font = await fontDeployer.deploy()
    const sharedNFTLogic = await sharedNFTLogicDeployer.deploy()
    const zorb = await zorbDeployer.deploy(sharedNFTLogic.address)
    const metadataDeployer = new FaucetMetadataRenderer__factory(signer)
    const metadata = await metadataDeployer.deploy(sharedNFTLogic.address, zorb.address, font.address)
    const faucetImplDeployer = new ETHFaucet__factory(signer)
    const factoryDeployer = new FaucetFactory__factory(signer)
    const faucetImpl = await faucetImplDeployer.deploy(metadata.address)
    faucetFactory = await factoryDeployer.deploy(faucetImpl.address, faucetImpl.address)
    const linearStrategyDeployer = new LinearStrategy__factory(signer)
    const cliffStrategyDeployer = new CliffStrategy__factory(signer)
    const dailyStepStrategyDeployer = new DailyStepStrategy__factory(signer)
    linearStrategy = await linearStrategyDeployer.deploy();
    cliffStrategy = await cliffStrategyDeployer.deploy();
    dailyStepStrategy = await dailyStepStrategyDeployer.deploy();


    const testTokenDeployer = new TestERC20__factory(signer)
    testToken = await testTokenDeployer.deploy()

  });

  async function mintTestFaucet(s: Contract): Promise<ETHFaucet> {
    await faucetFactory.connect(signer).faucetForToken(ethers.constants.AddressZero)
    const deployedFaucet = await faucetFactory.faucetForTokenView(ethers.constants.AddressZero)
    const faucet = await new ETHFaucet__factory(signer).attach(deployedFaucet)
    await faucet.connect(signer).mint(signerAddress, parseEther('100'), ONE_MONTH, s.address, true, { value: parseEther('100') })
    return faucet
  }

  it("renders a linear strategy", async () => {
    const faucet = await mintTestFaucet(linearStrategy)
    // get metadata
    const metadata = await faucet.tokenURI(0);
    const image = makeInline(parseJson(metadata).image);
    await writeFile(join(__dirname, "./test-out/view-linear-strategy.svg"), image);
  });
  it("renders a cliff strategy", async () => {
    const faucet = await mintTestFaucet(cliffStrategy)
    // get metadata
    const metadata = await faucet.tokenURI(0);
    const image = makeInline(parseJson(metadata).image);
    await writeFile(join(__dirname, "./test-out/view-cliff-strategy.svg"), image);
  });
  it("renders a daily step strategy", async () => {
    const faucet = await mintTestFaucet(dailyStepStrategy);
    console.log({ faucetDetails: await faucet.getFaucetDetailsForToken(0) })
    // get metadata
    const metadata = await faucet.tokenURI(0);
    const image = makeInline(parseJson(metadata).image);
    await writeFile(join(__dirname, "./test-out/view-daily-step-strategy.svg"), image);
  });
});