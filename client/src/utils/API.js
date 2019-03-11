import axios from "axios";

export default {

  // db.Vendors and Vendor Routes
  findAllVendors: function() {
    return axios.get("/api/vendor");
  },

  findOneVendor: function(id) {
    return axios.get("/api/vendor/" + id);
  },
  
  createVendor: function(vendorData) {
    return axios.post("/api/vendor", vendorData);
  },

  deleteVendor: function(id) {
    return axios.delete("/api/vendor/" + id);
  },

  // dd.Donations and Donation Routes
  findAllDonations: function() {
    return axios.get("/api/donation");
  },

  findOneDonation: function(id) {
    return axios.get("/api/donation/" + id);
  },
  
  createDonation: function(donationData) {
    return axios.post("/api/donation", donationData);
  },

  deleteDonation: function(id) {
    return axios.delete("/api/donation/" + id);
  },


};
