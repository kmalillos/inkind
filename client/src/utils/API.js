import axios from "axios";

export default {

  getVendors: function() {
    return axios.get("/api/vendor");
  },

  getVendor: function(id) {
    return axios.get("/api/vendor/" + id);
  },
  
  postVendor: function(vendorData) {
    return axios.post("/api/vendor", vendorData);
  },

  deleteVendor: function(id) {
    return axios.delete("/api/vendor/" + id);
  },

  getDonations: function() {
    return axios.get("/api/donation");
  },

  getDonation: function(id) {
    return axios.get("/api/donation/" + id);
  },
  
  postDonation: function(donationData) {
    return axios.post("/api/donation", donationData);
  },

  deleteDonation: function(id) {
    return axios.delete("/api/donation/" + id);
  },


};
