// Dummy API
export const isAuthenticated = (val: boolean) => val;

export const getSignInMethods = () => {
  return {
    SAAS: ["Github", "BitBucket", "Azure", "GitLab"],
    Self: ["GitLab", "SSO"],
  };
};

export const getLoginScreenStats = () => {
  return {
    languageSupport: 30,
    developers: "10K",
    hoursSaved: "100K",
    issuesFixed: "500K",
    issuesIncrease: 14,
  };
};
