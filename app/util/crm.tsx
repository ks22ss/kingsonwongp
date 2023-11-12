import axios from "axios";

interface SubmitData {
  firstname: string;
  email: string;
  phone: string;
  hs_content_membership_notes: string;
}

//create a contact on hubspot
export const createHubSpotContact = async (submitData: SubmitData) => {
  try {
    const response = await axios.post("https://3543whjn5dfia3nvr57cjlmvee0xyiml.lambda-url.ap-southeast-1.on.aws/", {
      properties: submitData,
    });
    if (response.status >= 200 && response.status < 300) {
      return true;
    }
    
  } catch (error) {
    console.log(error);
    return false;

  }
};

