export default function loadBalancer(chinaDownload, USDownload) {
  const resolve = Promise.race([chinaDownload, USDownload]);
  return resolve;
}
