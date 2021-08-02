import { HardhatUserConfig } from 'hardhat/types';
const config: HardhatUserConfig = {
  solidity: {
    version: '0.6.12',
    settings: {
      metadata: {
        bytecodeHash: 'none',
      },
      optimizer: {
        enabled: true,
        runs: 200,
        details: {
          yul: false,
        },
      },
    },
  },
}
export default config;
