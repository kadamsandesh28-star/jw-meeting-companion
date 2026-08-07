export interface CongregationProfile {
  congregationName: string;
  kingdomHall: string;
  circuit: string;
  language: string;
  scriptureText: string;
  scriptureReference: string;
}

const STORAGE_KEY = "jw-congregation-profile";

const DEFAULT_PROFILE: CongregationProfile = {
  congregationName: "My Congregation",
  kingdomHall: "",
  circuit: "",
  language: "English",
  scriptureText:
    "Do not go beyond the things that are written.",
  scriptureReference: "1 Corinthians 4:6",
};

export function loadCongregationProfile(): CongregationProfile {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return DEFAULT_PROFILE;
  }

  try {
    return {
      ...DEFAULT_PROFILE,
      ...JSON.parse(data),
    };
  } catch {
    return DEFAULT_PROFILE;
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