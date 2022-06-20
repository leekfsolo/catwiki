export interface BreedRating {
  adaptability?: number;
  affection_level?: number;
  child_friendly?: number;
  grooming?: number;
  intelligence?: number;
  health_issues?: number;
  social_needs?: number;
  stranger_friendly?: number;
}

export interface Breed {
  image?: string;
  name?: string;
  description?: string;
  id?: string;
  temperament?: string;
  origin?: string;
  life_span?: string;
  photos?: Array<string>;
  rating?: BreedRating;
}
