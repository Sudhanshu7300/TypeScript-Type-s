import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>
            TypeScript checks a program for errors before execution,&nbsp;
            <code className={styles.code}>
              oes so based on the kinds of values, making it a static type
              checker.
            </code>
          </h1>
        </div>
        <h4 className={styles.mt20}>
          This introduction is designed for working Haskell or ML programmers
          who want to learn TypeScript. It describes how the type system of
          TypeScript differs from Haskell’s type system. It also describes
          unique features of TypeScript’s type system that arise from its
          modelling of JavaScript code. This introduction does not cover
          object-oriented programming. In practice, object-oriented programs in
          TypeScript are similar to those in other popular languages with OO
          features.
        </h4>
        <h4 className={styles.mt20}>
          TypeScript has corresponding primitive types for the built-in types:
          number string bigint boolean symbol null undefined object Other
          important TypeScript types Type Explanation unknown the top type.
          never the bottom type. object literal eg property: Type void for
          functions with no documented return value T[] mutable arrays, also
          written ArrayT [T, T] tuples, which are fixed-length but mutable (t:
          T) = U functions
        </h4>
        <h3 className={styles.mt20}>
          What is TypeScript? <br />
        </h3>
        <h4 className="mt-20">
          TypeScript is a superset of JavaScript, meaning that it does
          everything that JavaScript does, but with some added features.
        </h4>
        <h4>
          <br /> The main reason for using TypeScript is to add static typing to
          JavaScript. Static typing means that the type of a variable cannot be
          changed at any point in a program. It can prevent a LOT of bugs!
        </h4>
        <h4 className={styles.mt20}>
          TypeScript doesn’t consider any JavaScript code to be an error because
          of its syntax. This means you can take any working JavaScript code and
          put it in a TypeScript file without worrying about exactly how it is
          written.
        </h4>
        <h3 className={styles.mt20}>Is TypeScript worth it? </h3>
        <h4 className={styles.mt20}>Why you should use TypeScript </h4>
        <ol>
          <li>
            Research has shown that TypeScript can spot 15% of common bugs.
          </li>
          <li>
            Readability – it is easier to see what the code it supposed to do
            And when working in a team, it is easier to see what the other
            developers intended to.
          </li>
          <li>
            Learning TypeScript will give you a better understanding, and a new
            perspective, on JavaScript.
          </li>
        </ol>
        <h3 className="mt-20"> Drawbacks of TypeScript </h3>
        <div className="mt-10">
          <ol>
            <li>
              TypeScript takes longer to write than JavaScript, as you have to
              specify types, so for smaller solo projects it might not be worth
              using it.
            </li>
            <li>
              TypeScript has to be compiled – which can take time, especially in
              larger projects.
            </li>
          </ol>
        </div>
        <div className="mt-10">
          But the extra time that you have to spend writing more precise code
          and compiling will be more than saved by how many fewer bugs you'll
          have in your code.
          <p className="mt2-20">
            For many projects – especially medium to large projects – TypeScript
            will save you lots of time and headaches.
          </p>
          <p className="mt2-20">
            And if you already know JavaScript, TypeScript won't be too hard to
            learn. It's a great tool to have in your arsenal.
          </p>
        </div>
        <div className={styles.mt20}>
          <h2> Boxed types</h2>
          <p className={styles.mt20}>
            JavaScript has boxed equivalents of primitive types that contain the
            methods that programmers associate with those types. TypeScript
            reflects this with, for example, the difference between the
            primitive type number and the boxed type Number. The boxed types are
            rarely needed, since their methods return primitives.
          </p>
        </div>
        <div className={styles.mt20}>
          <h2> Gradual typing</h2>
          <p className={styles.mt20}>
            TypeScript uses the type any whenever it can’t tell what the type of
            an expression should be. Compared to Dynamic, calling any a type is
            an overstatement. It just turns off the type checker wherever it
            appears.
          </p>
        </div>
        <div className={styles.mt20}>
          <h2> Structural typing</h2>
          <p className={styles.mt20}>
            TypeScript uses the type any whenever it can’t tell what the type of
            an expression should be. Compared to Dynamic, calling any a type is
            an overstatement. It just turns off the type checker wherever it
            appears.
          </p>
        </div>
        <div className={styles.mt20}>
          <h2> Type aliases</h2>
          <p className={styles.mt20}>
            Type aliases are mere aliases, just like type in Haskell. The
            compiler will attempt to use the alias name wherever it was used in
            the source code, but does not always succeed.
            <br /> type Size = [number, number];
            <br /> let x: Size = [101.1, 999.9];
            <br />
            <span className={styles.mt20}>
              The closest equivalent to newtype is a tagged intersection: <br />
              type FString = string & __compileTimeOnly: any ; <br />
              An FString is just like a normal string, except that the compiler
              thinks it has a property named __compileTimeOnly that doesn’t
              actually exist. This means that FString can still be assigned to
              string, but not the other way round.
            </span>
          </p>
        </div>
        <div className={styles.mt20}>
          <p>
            Huh? TypeScript reported an error on our second argument, but why?
            Perhaps surprisingly, calling Date() in JavaScript returns a string.
            On the other hand, constructing a Date with new Date() actually
            gives us what we were expecting. Anyway, we can quickly fix up the
            error: greet("Maddison", new Date());
          </p>
        </div>
      </main>
    </div>
  );
}
