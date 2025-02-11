const showTenantDropdown = false;
const allFleets = true;
const isSuperAdmin = false;
const isDealer = true;
const isDistributor = false;

// How logical operators works with paranthesis and without paranthesis.

const test = () => {
  if (
    showTenantDropdown &&
    allFleets &&
    (isSuperAdmin || isDealer || isDistributor)
  ) {
    console.log("With Paranthesis...");
  } else if (
    (showTenantDropdown && allFleets && isSuperAdmin) ||
    isDealer ||
    isDistributor
  ) {
    console.log("Without Paranthesis...");
  }
};

test();