# fast_tracker
A WIP project; see [PROPOSAL.md](PROPOSAL.md) for more information.

# Repo Setup
- Clone this repository.
- `cd` to repository root.
- Install with: `yarn`

# DB Setup
- On macOS...
  - `brew tap mongodb/brew`
  - `brew install mongodb-community@4.0`
  - (optional) `mkdir <new database directory>`
  - update package.json `serve` script to point to database location.

# Running the Project
- `yarn serve` to "spin up" database.
- `yarn start` to run server script.

# Testing the Project
- `yarn test:list` to print table JSON.
- `yarn test:add` to add arbitrary item.

## Stack
- mongoDB
- Express
