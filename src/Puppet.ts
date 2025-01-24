import Video from "./Models/Video";
import puppeteer from "puppeteer-extra"; // browser implementation
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import fs from "fs";
import * as Puppeteer from "puppeteer"; // type namespace

// internal debug flag
const DEBUG = true;

const debug = (message: string) => { if (DEBUG) console.log(message); };

// hopefully prevent YouTube detection
puppeteer.use(StealthPlugin());

class Puppet {
  private browser: Puppeteer.Browser | undefined;
  private tab: Puppeteer.Page | undefined;
  
  private async makeBrowser() {
    debug("makeBrowser function initiated")
    const config = JSON.parse(
      fs.readFileSync("config.json", "utf-8")
    );
    this.browser = await puppeteer.launch({
      headless: config["headless"] || false,
      defaultViewport: {
        width: config["screenW"] || 1920, 
        height: config["screenH"] || 1080
      }
    });
    debug("Browser launched");
    this.tab = await this.browser.newPage();
    debug("New tab created");
  }
  private async login(): Promise<boolean> {
    // login or make account
    return false; // made new account
    return true; // logged in
  }
  async run(): Promise<void> {
    if (this.browser === undefined || this.tab === undefined) {
      await this.makeBrowser();
    }
    await this.login();
    // collect data
  }
  async criteriaMet(): Promise<boolean> {
    // check if data collection is complete
    // quota can be a length of time or number of videos
    return false;
  }
  async kickoff(): Promise<void> {
    // start python scripts to create data graphics once data is collected
  }
}

async function main() {
  const puppet = new Puppet();
  await puppet.run();
}

new Promise(main).then(() => {console.log("All done")});