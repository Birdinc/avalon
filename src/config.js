let config = {
    history: {
        0: {
            // this is the block 0 configuration for mainnet
            accountPriceBase: 20000,
            accountPriceCharMult: 4,
            accountPriceChars: 5,
            accountPriceMin: 200,
            accountMaxLength: 50,
            accountMinLength: 1,
            // allowed username chars
            allowedUsernameChars: 'abcdefghijklmnopqrstuvwxyz0123456789',
            allowedUsernameCharsOnlyMiddle: '-.',
            // should we allow people to vote multiple times on the same content ?
            allowRevotes: false,
            // the base58 encoding alphabet
            b58Alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
            // the block #0 genesis timestamp
            block0ts: 1601477849000,
            // the block time in ms
            blockTime: 3000,
            // the number of ms needed for 0.01 DTC to generate 1 byte of bw
            bwGrowth: 36000000, // +10 bytes per hour per DTC (3600 * 1000 * 100 / 10)
            // the maximum bandwidth an account can have available
            bwMax: 64000,
            // the number of rounds of consensus before block is valid (min 2)
            consensusRounds: 2,
            // base rentability of votes
            ecoBaseRent: 0.50,
            // the number of blocks from the past taken into consideration for econonomics
            ecoBlocks: 9600, // 8 hours
            // the precision of the claimable amounts
            ecoClaimPrecision: 3,
            // the required number of ms before a vote reward can be claimed
            ecoClaimTime: 604800000, // 7 days
            // can the first vote rewards be altered by downvotes like other votes
            ecoPunishAuthor: true,
            // the percentage of coins that are burnt when there are opposite votes with rewards
            ecoPunishPercent: 0.5,
            // the number of ms before a vote reaches 100% rentability
            ecoRentStartTime: 86400000,
            // the number of ms when a vote rentability starts going down
            ecoRentEndTime: 302400000,
            ecoRentPrecision: 6,
            // starting rentability of votes
            ecoStartRent: 0.75,
            // the maximum number of follows a single account can do
            followsMax: 2000,
            // F
            hotfix1: false,
            // the max size of a stringified json input (content / user profile)
            // best if kept slightly lower than bwMax
            jsonMaxBytes: 60000,
            // the max length of a key identifier
            keyIdMaxLength: 25,
            // how many max leaders there can be, and how much tokens and VT they earn per "mined" block
            leaderReward: 1,
            leaderRewardVT: 500,
            leaders: 10,
            // how long of the end of the block hash is used for the leader pseudo random generator shuffle
            leaderShufflePrecision: 6,
            // the maximum number of leaders an account can vote for
            leaderMaxVotes: 5,
            // the "master" account starting stake (total starting supply)
            // not applied if starting from a genesis.zip file
            masterBalance: 10000000000,
            // the number of tokens distributed before master gets 1 free token printed.
            // masterFee = 2 => <33% fee
            // masterFee = 4 => <20% fee
            // masterFee = 9 => <10% fee
            // masterFee = 19 => <5% fee
            masterFee: 9,
            // the init account username
            masterName: 'dtube',
            // if false master can create accounts with usernames without burning tokens
            masterPaysForUsernames: false,
            // the master account public original key (irrelevant if using genesis)
            masterPub: 'dTuBhkU6SUx9JEx1f4YEt34X9sC7QGso2dSrqE8eJyfz',
            // the master account public leader key  (irrelevant if using genesis)
            masterPubLeader: 'dTuBhkU6SUx9JEx1f4YEt34X9sC7QGso2dSrqE8eJyfz',
            // the maximum time drift in ms before a block is invalid
            maxDrift: 200,
            // the maximum number of transactions in a single block
            maxTxPerBlock: 20,
            // the max length of a transfer memo
            memoMaxLength: 250,
            // defines how long it takes for a notification to get deleted, and how often the purge happens
            // e.g.: purge notifications older than 56*3600 blocks every 3600 blocks
            notifPurge: 3600,
            notifPurgeAfter: 56,
            // the maximum number of mentions triggering a notification
            notifMaxMentions: 10,
            // the sha256sum hash of block 0 (new origin hash -> new chain)
            originHash: 'da5fe18d0844f1f97bf5a94e7780dec18b4ab015e32383ede77158e059bacbb2',
            // the default number of random bytes to use for new key generation
            randomBytesLength: 32,
            // the minimum hourly reward pool (including leader rewards)
            rewardPoolMin: 1,
            // the multiplier for the reward pool, modifying it is a bad practise
            rewardPoolMult: 5, // 0.05 DTC / user / cycle => 1.05 DTC / user / week
            // the maximum share of the reward pool a single distribution can generate
            rewardPoolMaxShare: 0.1,
            // the estimated number of active users on the network
            rewardPoolUsers: 30000,
            // the maximum length of tags (on votes)
            tagMaxLength: 25,
            tagMaxPerContent: 5,
            // precision of author tip percentage
            // 1 => 10% step, 2 => 1% step, 3 => 0.1% step, 4 => 0.01% step
            tippedVotePrecision: 2,
            // the time after which transactions expire and wont be accepted by nodes anymore
            txExpirationTime: 60000,
            // limit which transactions are available
            // key: transaction id (see transaction.js:TransactionType)
            // value: null/0 (default): enabled, 1: disabled, 2: master-only
            txLimits: {
                14: 2,
                15: 2,
                19: 1
            },
            // the number of ms needed for 0.01 DTC to generate 1 vt
            vtGrowth: 360000000, // +1 vt per hour per DTC (3600 * 1000 * 100)
            vtPerBurn: 6 // can be updated in the future to modify incentives
        },
        1000090: {
            leaders: 13,
            leaderRewardVT: 100,
            vtPerBurn: 44
        },
        4800000: {
            // Author tip hardfork
            txLimits: {
                14: 2,
                15: 2,
                19: 0,
                23: 1,
                24: 1,
                28: 1
            }
        },
        4860000: {
            hotfix1: true
        },
        8500050: {
            maxKeys: 25,
            disallowVotingInactiveLeader: true,
            burnAccount: 'dtube.airdrop',
            preloadVt: 50, // 50% of vtPerBurn
            preloadBwGrowth: 2, // x2 more time of bwGrowth
            multisig: true,
            leaders: 15
        },
        8595000: {
            masterNoPreloadAcc: true
        },
        25000000: {
            /*
            accountAuthEnabled: true,
            burnAccountIsBlackhole: true,
            playlistEnabled: true,
            playlistLinkMin: 3,
            playlistLinkMax: 50,
            playlistContentLinkMin: 1,
            playlistContentLinkMax: 101,
            playlistSequenceMax: 1000,
            playlistSequenceIdMax: 10000,
            txLimits: {
                14: 2,
                15: 2,
                23: 0,
                24: 0,
                28: 0
            }
            */
        }
    },
    read: (blockNum) => {
        let finalConfig = {}
        for (const key in config.history) 
            if (blockNum >= key) {
                if (blockNum === parseInt(key) && blockNum !== 0)
                    logr.info('Hard Fork #'+key)
                Object.assign(finalConfig, config.history[key])
            }
            else {
                if (config.history[key].ecoBlocks > finalConfig.ecoBlocks
                && config.history[key].ecoBlocks - finalConfig.ecoBlocks >= key-blockNum)
                    finalConfig.ecoBlocksIncreasesSoon = config.history[key].ecoBlocks
                
                break
            }
            
        
        return finalConfig
    }
} 

module.exports = config
