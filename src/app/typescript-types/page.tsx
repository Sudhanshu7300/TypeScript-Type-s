import styles from "../page.module.css";

export default function types() {
  // ** Array Type's
  let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
  let names: string[] = ["Danny", "Anna", "Bazza"]; // can only contain strings
  let options: boolean[] = [true, false, false]; // can only contain true or false
  let books: object[] = [
    { name: "Fooled by randomness", author: "Nassim Taleb" },
    { name: "Sapiens", author: "Yuval Noah Harari" },
  ]; // can only contain objects
  let arr: any[] = ["hello", 1, true]; // any basically reverts TypeScript back into JavaScript
  ids.push(6);
  // ids.push("7"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.

  // ** Aliases Type's

  type StringOrNumber = string | number;

  type PersonObject = {
    name: string;
    id: StringOrNumber;
  };

  const person1: PersonObject = {
    name: "John",
    id: 1,
  };

  const person2: PersonObject = {
    name: "Delia",
    id: 2,
  };

  return (
    <main className={styles.main}>
      <div>
        <h2>The DOM and type casting</h2>{" "}
        <p className="mt-10">
          {" "}
          TypeScript doesn't have access to the DOM like JavaScript. This means
          that whenever we try to access DOM elements, TypeScript is never sure
          that they actually exist.{" "}
        </p>
        <h2 className="mt-10">Types in TypeScript</h2>{" "}
        <h3 className="mt-10">1.Primitive Types</h3>
        <h4 className="mt-10">
          Primitive types In JavaScript, a primitive value is data that is not
          an object and has no methods. There are 7 primitive data types:
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <li>string</li>
          <li>number</li>
          <li>bigint</li>
          <li>boolean</li>
          <li>undefined</li>
          <li>null</li>
          <li>symbol</li>
        </div>
        <p className="mt-10">
          TypeScript, we can set the type we want a variable to be be adding :
          type (called a "type annotation" or a "type signature") after
          declaring a variable.
        </p>
        <div className="mt-20">
          <h4>
            If a primitive type is assigned to a variable, we can think of that
            variable as containing the primitive value. Each primitive value is
            stored in a unique location in memory. <br /> We can also set a
            variable to be able to be a union type. A union type is a variable
            that can be assigned more than one type:
          </h4>
          <h5 className="mt-10">
            let age: string | number; age = 26; age = '26';
          </h5>
          <h3 className="mt-20">2.Reference Types</h3>
          <h4 className="mt-10">
            This isn't the case with reference types. Reference types refer to a
            memory location where the object is stored. <br /> In JavaScript,
            almost "everything" is an object. In fact (and confusingly),
            strings, numbers and booleans can be objects if defined with the new
            keyword: let firstname = new String('Danny');
            console.log(firstname); // String {"Danny"}
          </h4>
          <h3 className="mt-20"> 3.Arrays in TypeScript</h3>
          <h4 className="mt-10">
            In TypeScript, you can define what type of data an array can contain
          </h4>
          <h3 className="mt-20"> 4.Objects in TypeScript</h3>
          <h4 className="mt-10">
            Objects in TypeScript must have all the correct properties and value
            types:
          </h4>
          <p className="mt-10">
            {" "}
            When defining the signature of an object, you will usually use an
            interface. This is useful if we need to check that multiple objects
            have the same specific properties and value types:
          </p>

          <h3 className="mt-20"> 5.Functions in TypeScript </h3>
          <h4 className="mt-10">
            We can define what the types the function arguments should be, as
            well as the return type of the function:
          </h4>
          <p className="mt-10">
            Notice how it isn't necessary to explicitly state that circle is a
            function; TypeScript infers it. TypeScript also infers the return
            type of the function, so it doesn't need to be stated either.
            Although, if the function is large, some developers like to
            explicitly state the return type for clarity.
            <br />
            We can add a question mark after a parameter to make it optional.
            Also notice below how c is a union type that can be a number or
            string:
          </p>
          <h3 className="mt-20"> 6.Dynamic (any) types</h3>
          <h4>
            Using the any type, we can basically revert TypeScript back into
            JavaScript:
          </h4>
          <p className="mt-10">
            It's recommended to avoid using the any type as much as you can, as
            it prevents TypeScript from doing its job – and can lead to bugs.
          </p>
          <h3 className="mt-20"> 7.Type Aliases</h3>
          <h4 className="mt-10">
            {" "}
            Type Aliases can reduce code duplication, keeping our code DRY.
            Below, we can see that the PersonObject type alias has prevented
            repetition, and acts as a single source of truth for what data a
            person object should contain.
          </h4>
          <h3 className="mt-20"> 8.Interfaces in TypeScript</h3>
          <h4 className="mt-10">
            {" "}
            Interfaces are very similar to type aliases, and in many cases you
            can use either. The key distinction is that type aliases cannot be
            reopened to add new properties, vs an interface which is always
            extendable.
          </h4>

          <h3 className="mt-20"> 9.Generics</h3>
          <h3 className="mt-20"> 10.Enums in TypeScript</h3>
          <h3 className="mt-20"> 11.TypeScript strict mode</h3>
          <h3 className="mt-20"> 12.Narrowing in TypeScript</h3>
        </div>
      </div>
    </main>
  );
}
