import axios from "axios";

export default {

  // Vendor Routes
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

  // Donation Routes
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

  // Search Routes
  searchByVendor: function(vendorName) {
    return axios.get("/api/searchVendor/" + vendorName);
  },

  searchByCity: function(city) {
    return axios.get("/api/searchCity/" + city);
  },

  searchByState: function(state) {
    return axios.get("/api/searchState/" + state);
  },

  searchByType: function(donationType) {
    return axios.get("/api/searchType/" + donationType);
  },

  //User Routes

  createUser: function(userData){
    return axios.post("/api/user/signup", userData);
  },

  loginUser: function(userData){
    return axios.post("/api/user/login", userData);
  },

  deleteUser: function(userId){
    return axios.delete("/api/user/" + userId);
  },

};
