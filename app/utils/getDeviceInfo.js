import http from "http";
import os from "os";

function getMACAddress(interfaceName) {
  const networkInterfaces = os.networkInterfaces();

  // Log the interface names and their details
  for (const interfaceName in networkInterfaces) {
    console.log(`Interface Name: ${interfaceName}`);
    networkInterfaces[interfaceName].forEach((iface) => {
      console.log(`  - Address: ${iface.address}`);
      console.log(`  - Netmask: ${iface.netmask}`);
      console.log(`  - MAC: ${iface.mac}`);
      console.log(`  - Internal: ${iface.internal}`);
    });
  }

  // Check if the interface exists
  if (!networkInterfaces[interfaceName]) {
    console.error(`Interface ${interfaceName} not found.`);
    return null;
  }

  // Loop through the interface details
  for (const iface of networkInterfaces[interfaceName]) {
    // Check if the interface is not internal and has a valid MAC address
    if (!iface.internal && iface.mac !== "00:00:00:00:00:00") {
      return iface.mac; // Return the first valid MAC address found
    }
  }

  console.log(`No valid MAC address found for interface ${interfaceName}.`);
  return null;
}

function getDeviceInfo() {
  // Get OS information
  console.log("Operating System:", os.type());
  console.log("Hostname:", os.hostname());

  http.get({ host: "api.ipify.org", port: 80, path: "/" }, function (resp) {
    resp.on("data", function (ip) {
      console.log("My public IP address is: " + ip);
    });
  });

  // Example usage
  const interfaceName = "Ethernet"; // Replace with the desired interface name (e.g., 'wlan0', 'eth0', etc.)
  const macAddress = getMACAddress(interfaceName);

  if (macAddress) {
    console.log(`MAC Address for ${interfaceName}:`, macAddress);
  }
}

export default getDeviceInfo;
