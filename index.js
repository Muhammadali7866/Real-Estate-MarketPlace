const express = require("express");
const app = express();
const errorHandler = require("./utils/globalErrorHandler");
require("./utils/database");
app.use(express.json());
const propertyRoutes = require("./Routes/propertyRoutes");
const propertyTypeRoutes = require("./Routes/propertyTypeRoutes");
const listingTypeRoutes = require("./Routes/listingTypeRoutes");
const listingStatusRoutes = require("./Routes/listingStatusRoutes");
const featureRoutes = require("./Routes/featureRoutes");
const listingRoutes = require("./Routes/listingRoutes");
const roleTypeRoutes = require("./Routes/roleTypeRoutes");
const offerStatusRoutes = require("./Routes/offerStatusRoutes");
const contractStatusRoutes = require("./Routes/contractStatusRoutes");
const clientRoutes = require("./Routes/clientRoutes");
const employeeRoutes = require("./Routes/employeeRoutes");
const inspectionRoutes = require("./Routes/inspectionRoutes");
const offerRoutes = require("./Routes/offerRoutes");
const contractRoutes = require("./Routes/contractRoutes");
app.use("/api/v1/property", propertyRoutes);
app.use("/api/v1/propertyType", propertyTypeRoutes);
app.use("/api/v1/listingType", listingTypeRoutes);
app.use("/api/v1/listingStatus", listingStatusRoutes);
app.use("/api/v1/feature", featureRoutes);
app.use("/api/v1/listing", listingRoutes);
app.use("/api/v1/roleType", roleTypeRoutes);
app.use("/api/v1/OfferStatus", offerStatusRoutes);
app.use("/api/v1/ContractStatus", contractStatusRoutes);
app.use("/api/v1/Client/", clientRoutes);
app.use("/api/v1/employee/", employeeRoutes);
app.use("/api/v1/Inspection", inspectionRoutes);
app.use("/api/v1/Offer", offerRoutes);
app.use("/api/v1/Contract/", contractRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("server is lisiting on the port 3000");
});
