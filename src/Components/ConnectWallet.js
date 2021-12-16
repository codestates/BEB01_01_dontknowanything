import { AccountBalanceWallet } from "@material-ui/icons";

function ConnectWallet({ connectWallet }) {
  return (
    <button
      type="button"
      className="navIcon"
      onClick={() => {
        connectWallet();
      }}
    >
      <AccountBalanceWallet fontSize="large" />
    </button>
  );
}

export default ConnectWallet;
