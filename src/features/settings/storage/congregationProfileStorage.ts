export interface CongregationProfile {
  congregationName: string;
}

const STORAGE_KEY = "jw-congregation-profile";

export function loadCongregationProfile(): CongregationProfile {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return {
      congregationName: "My Congregation",
    };
  }

  try {
    return JSON.parse(data);
  } catch {
    return {
      congregationName: "My Congregation",
    };
  }
}

export function saveCongregationProfile(
  profile: CongregationProfile
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(profile)
  );
}