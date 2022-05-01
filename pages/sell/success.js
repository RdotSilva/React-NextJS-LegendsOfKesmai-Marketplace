import React from "react";
import Layout from "../../components/Layout/Layout.jsx";
import { useRouter } from "next/router";
import SellSuccess from "../../components/Sell/SellSuccess.jsx";

/**
 * Render the /sell/success page
 */
function SellSuccessPage() {
  const router = useRouter();

  // Fetch item data from the router query -> going to send this as props to success component
  const { query: successfulItemListing } = router;

  return (
    <>
      <Layout />
      <SellSuccess itemListing={successfulItemListing} />
    </>
  );
}

export default SellSuccessPage;
