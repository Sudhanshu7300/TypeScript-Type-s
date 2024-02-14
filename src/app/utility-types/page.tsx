"use client";
import { getAllData, RequiredUserProfile } from "../../types/type";
import {
  RegistrationForm,
  GetProfileUser,
  CourseCatalog,
  PickUserBasicInfo,
  ContentWithoutURL,
  StandardUserRole,
  ExtractCourseCategory,
  NonNullableContentItem,
} from "../../types/type";
import styles from "../page.module.css";

export default async function main() {
  //**  Start Type Awaited Type  ================================================================================
  async function fetchData(): Promise<{ message: string; numberData: number }> {
    return new Promise((resolve) => {
      resolve({
        message: "Hello, Awaited<Type>!",
        numberData: 42,
      });
    });
  }
  const asyncFunctionResult: Promise<{ message: string; numberData: number }> =
    fetchData();

  type ResolvedResult = Awaited<typeof asyncFunctionResult>;
  const resolvedData: ResolvedResult = await asyncFunctionResult;
  //**   ================================================================================ End Type Awaited Type

  //** Start Partial Type  ================================================================================
  const registrationData: RegistrationForm = {
    username: "Sudhanshu Sharma",
    email: "sudhanshu.sharma@example.com",
    password: "mySecurePassword",
    phoneNumber: "123-456-7890", // Optional field
  };
  const a: getAllData = {
    name: "Sudhanshu",
  };
  //**  ================================================================================ End  Partial Type

  //**Start Required Type  ================================================================================
  const user: RequiredUserProfile = {
    username: "Manish Tomar",
    email: "manish.tomar@example.com",
  };
  //**  ================================================================================ End  Required Type

  //**Start Pick Type  ================================================================================
  const courses: CourseCatalog = {
    math101: {
      title: "Mathematics 101",
      description: "Introduction to basic math principles",
      instructor: "Dr. Smith",
      duration: 60,
    },
    history101: {
      title: "History 101",
      description: "A journey through ancient civilizations",
      instructor: "Prof. Johnson",
      duration: 45,
    },
  };
  const PickBasicInfo: PickUserBasicInfo = {
    username: "john_doe",
    email: "john.doe@example.com",
  };
  //**  ================================================================================ End  Pick Type

  //**Start Omit Type  ================================================================================
  const OmitContent: ContentWithoutURL = {
    title: "Introduction Video",
    type: "video",
    // 'url' property is omitted
  };
  //**  ================================================================================ End Omit  Type

  //**Start Exclude Type  ================================================================================
  const userRole: StandardUserRole = "student"; // Valid
  //**  ================================================================================ End Exclude  Type

  //**Start Extract Type  ================================================================================

  const ExtractCategory: ExtractCourseCategory = "science"; // Valid
  //**  ================================================================================ End Extract  Type

  //**Start NonNullable Type  ================================================================================
  const NonNullableContent: NonNullableContentItem = {
    title: "Introduction Video",
    type: "video",
    // ... other properties are guaranteed to be non-null
  };
  //**  ================================================================================ End NonNullable  Type

  //**Start Parameters  Type  ================================================================================
  function add(a: number, b: number): number {
    return a + b;
  }
  // Use Parameters to extract the parameter types
  type AddFunctionArgs = Parameters<typeof add>;

  // Create a function that takes arguments of the correct types
  function safeAdd(...args: AddFunctionArgs): number {
    return add(...args);
  }
  const result = safeAdd(10, 20); // Valid
  //**End Parameters  Type  ================================================================================

  //**Start ReturnType    ================================================================================
  function executeAndLogResult(func: () => string) {
    const result = func();
    console.log(`Result: ${result}`);
  }

  function generateGreeting(): string {
    return "Hello, LMS!";
  }

  executeAndLogResult(generateGreeting);

  // Define a function that returns a Course object
  function createCourse(title: string, instructor: string): any {
    return {
      title,
      instructor,
    };
  }

  // Use ReturnType to capture the return type (Course)
  type CreateCourseReturnType = ReturnType<typeof createCourse>;

  const math101: CreateCourseReturnType = createCourse(
    "Mathematics 101",
    "Dr. Smith"
  ); // Valid
  // const invalidCourse: CreateCourseReturnType = createCourse('Mathematics 101', 123); // Error: Argument of type '123' is not assignable to parameter of type 'string'
  //**End ReturnType  Type  ================================================================================

  return (
    <main className={styles.main}>
      <div>
        <h2>1. Awaited Type</h2>
        <p className="mt-20">
          This type is meant to model operations like await in async functions,
          or the .then() method on Promises - specifically, the way that they
          recursively unwrap Promise <br />
          Awaited Type type useful in various scenarios involving asynchronous
          operations, especially when dealing with data fetching and
          manipulation. Message: <br />
          {resolvedData.message}
          <br />
          Number Data: {resolvedData.numberData}
        </p>
        <div className="mt-20">
          <h2>2.Partial Type</h2>
          <p className="mt-10">
            Constructs a type with all properties of Type set to optional. This
            utility will return a type that represents all subsets of a given
            type.
          </p>
          <p className="mt-10"> {a.name}</p>
          <p className="mt-10">{registrationData.username}</p>
          <p className="mt-10">{registrationData.phoneNumber}</p>
          <p className="mt-10">{registrationData.email}</p>
        </div>{" "}
        <div className="mt-20">
          <h2>3.Required Type</h2>
          <p className="mt-10">
            Constructs a type consisting of all properties of Type set to
            required. The opposite of Partial. <br /> for example :User Data:
            When defining user profiles or user-related data structures, you may
            want to ensure that essential user information is always provided.
          </p>
          <p className="mt-10">{user.username}</p>
          <p className="mt-10">{user.email}</p>
        </div>
        <div className="mt-20">
          <h2>4.Readonly Type</h2>
          <p className="mt-10">
            Constructs a type with all properties of Type set to readonly,
            meaning the properties of the constructed type cannot be reassigned.
          </p>
          <p className="mt-10">{GetProfileUser.username}</p>
          <p className="mt-10">{GetProfileUser.email}</p>
        </div>
        <div className="mt-20">
          <h2>5. Record -Keys, Type-</h2>
          <p className="mt-10">
            Constructs an object type whose property keys are Keys and whose
            property values are Type. This utility can be used to map the
            properties of a type to another type.
          </p>
          <p className="mt-10">Title : {courses.math101.title}</p>
          <p className="mt-10"> Description : {courses.math101.description}</p>
          <p className="mt-10">Instructor : {courses.math101.instructor}</p>
          <p className="mt-10">Duration : {courses.math101.duration}</p>
        </div>
        <div className="mt-20">
          <h2>6. Pick -Type, Keys-</h2>
          <p className="mt-10">
            Constructs a type by picking the set of properties Keys (string
            literal or union of string literals) from Type. <br />! The Pick
            Type, Keys utility type in TypeScript is used to create a new type
            by selecting a subset of properties (keys) from an existing type.
          </p>
          <p className="mt-10">Name : {PickBasicInfo.username}</p>
          <p className="mt-10"> Email : {PickBasicInfo.email}</p>
        </div>
        <div className="mt-20">
          <h2>7.{`Omit<Type, Keys>`}</h2>
          <p className="mt-10">
            you want to remove specific properties, you can use Omit to create a
            new type. <br />
            you can use the {`Omit<Type, Keys>`} utility type in TypeScript when
            you want to create a new type that excludes specific properties
            (keys) from an existing type. This can be useful when you need to
            remove certain properties from an object or when you want to define
            a new type based on an existing type with some properties omitted.
          </p>
          <p className="mt-10">Name : {OmitContent.title}</p>
          <p className="mt-10"> Type : {OmitContent.type}</p>
        </div>
        <div className="mt-20">
          <h2>8.{` Exclude<UnionType, ExcludedMembers> `}</h2>
          <p className="mt-10">
            you can use the {` Exclude<UnionType, ExcludedMembers> `}utility
            type in TypeScript when you want to create a new type by excluding
            specific members (values) from a union type. This can be useful when
            you need to filter out certain values from a set of possible values
            or when you want to create a new type that represents a subset of
            the original type.
            <br /> Ex- user roles represented as a union type and you want to
            exclude certain roles, you can use Exclude to create a new type with
            the excluded roles filtered out.
          </p>
          <p className="mt-10">Valid Role : {userRole}</p>
        </div>{" "}
        <div className="mt-20">
          <h2>9.{`Extract<Type, Union>`}</h2>
          <p className="mt-10">
            you can use the{`Extract<Type, Union>`}type in TypeScript when you
            want to create a new type by extracting only the members (values)
            from a union type that match a specific type. This is useful when
            you want to filter out values from a union type based on their type
            or when you want to create a new type representing a subset of
            values from the original type. <br />
            ex- categorizes courses and you want to extract only courses in the
            "science" category, you can use Extract to create a new type with
            those categories.
          </p>
          <p className="mt-10">Type that extracts only : {ExtractCategory}</p>
        </div>
        <div className="mt-20">
          <h2>10.{`NonNullable<Type>`}</h2>
          <p className="mt-10">
            you can use the{`NonNullable<Type>`}type in TypeScript when you want
            to create a new type that excludes null and undefined from the
            original type. This is useful when you want to ensure that a
            variable or property always has a defined value, improving the
            safety and predictability of your code.
            <br />
            ex-When managing course content or resources, you can use
            NonNullable to ensure that content properties are always defined.
          </p>
          <p className="mt-10">
            properties are guaranteed to be non-null <br />
            {NonNullableContent.title}
            {NonNullableContent.type}
          </p>
        </div>
        <div className="mt-20">
          <h2>11.{`Parameters<Type>`}</h2>
          <p className="mt-10">
            you can use the{`Parameters<Type>`}utility type in TypeScript when
            you want to extract the parameter types of a function or constructor
            type. This is useful when you need to work with the arguments passed
            to a function, especially in scenarios where you want to enforce
            type safety or perform runtime checks on function arguments.
            <br />
            ex- you can use Parameters to ensure that the provided arguments
            have the expected types --.
          </p>
          <p className="mt-10">{result}</p>
        </div>
        <div className="mt-20">
          <h2>12.{`ReturnType<Type>`}</h2>
          <p className="mt-10">
            you can use the{`ReturnType<Type>`}utility type when you want to
            extract and work with the return type of a function or a function
            type. This utility type allows you to capture and use the specific
            type that a function is expected to return.
            <br />
            ex- When defining functions that are expected to return specific
            types of values, you can use ReturnType to ensure that the actual
            return type matches the expected type. --.
          </p>
          <p className="mt-10">{math101.instructor}</p>
          <p className="mt-10">{math101.title}</p>
        </div>
        <div className="mt-20">
          <h2>13.Intrinsic String Manipulation Types</h2>
          <p className="mt-10">
            {`Uppercase<StringType>`},{` Lowercase<StringType>`},
            {` Capitalize<StringType>`}, and{` Uncapitalize<StringType>`} in
            TypeScript are often used in various scenarios within an LMS
            (Learning Management System) or any TypeScript project where you
            need to manipulate and format string data.
          </p>
        </div>
      </div>
    </main>
  );
}
