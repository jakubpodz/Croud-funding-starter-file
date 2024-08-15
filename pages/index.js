import React, { useEffect, useContext, useState } from "react";

import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components";

const Index = () => {
  const {
    titleData,
    getCampaigns, // Fixed function name to match the usage later
    createCampaign,
    donate,
    getUserCampaigns,
  } = useContext(CrowdFundingContext); // Fixed typo in `CrowdFundingContext`

  const [allCampaigns, setAllCampaigns] = useState([]); // Fixed naming and initialized state as an array
  const [userCampaigns, setUserCampaigns] = useState([]); // Fixed naming and initialized state as an array

  useEffect(() => {
    const fetchCampaignData = async () => {
      const allData = await getCampaigns(); // Await the async function
      const userData = await getUserCampaigns(); // Await the async function
      setAllCampaigns(allData);
      setUserCampaigns(userData);
    };

    fetchCampaignData(); // Call the async function
  }, []);

  // Donate popup modal state
  const [openModal, setOpenModal] = useState(false); // Fixed state name typo
  const [donateCampaign, setDonateCampaign] = useState(null); // Initialize as null

  console.log(donateCampaign);

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      <Card
        title="All Listed Campaigns" // Fixed typo in "Campaigns"
        allcampaign={allCampaigns}
        setOpenModel={setOpenModal}
        setDonate={setDonateCampaign}
      />

      {openModal && (
        <PopUp
          setOpenModl={setOpenModal} // Fixed typo in setOpenModal
          getDonations={donateCampaign}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default Index;
