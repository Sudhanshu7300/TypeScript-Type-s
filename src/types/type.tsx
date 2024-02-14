export type PartialData = {
  name: string;
  mobile: number;
};

export type getAllData = Partial<PartialData>;

export type RegistrationForm = {
  username: string;
  email: string;
  password: string; // A mandatory field
} & Partial<{
  phoneNumber: string; // Optional field
  address: string;
  dateOfBirth: string;
}>;

type UserProfile = {
  username: string;
  email: string;
};

export type RequiredUserProfile = Required<UserProfile>;

type GetUserProfile = {
  username: string;
  email: string;
};

export const GetProfileUser: Readonly<GetUserProfile> = {
  username: "john_doe",
  email: "john_doe@example.com",
};

type Course = {
  title: string;
  description: string;
  instructor: string;
  duration: number;
};

export type CourseCatalog = Record<string, Course>;

type UserProfilePickDetails = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
};

// Using Pick to create a new type with a subset of properties
export type PickUserBasicInfo = Pick<
  UserProfilePickDetails,
  "username" | "email"
>;

type ContentItem = {
  title: string;
  type: "video" | "document" | "quiz";
  url: string;
  // ... other content-related properties
};

// Create a content type without the 'url' property
export type ContentWithoutURL = Omit<ContentItem, "url">;

type UserRole = "student" | "instructor" | "admin" | "guest";

// Create a type that excludes the 'admin' and 'guest' roles
export type StandardUserRole = Exclude<UserRole, "admin" | "guest">;

type CourseCategory = "math" | "history" | "science" | "language";

// Create a type that extracts only 'science' courses
export type ExtractCourseCategory = Extract<CourseCategory, "science">;

type NonNullableItem = {
  title: string;
  type: "video" | "document" | "quiz";
  // ... other properties
};

// Create a type that ensures content items are non-nullable
export type NonNullableContentItem = NonNullable<NonNullableItem>;
