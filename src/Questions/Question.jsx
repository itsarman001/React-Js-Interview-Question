import { useState } from "react";

// Set Count Questins

function Question() {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const increamentWithCallback = () => {
    setCount((prevUpdate) => prevUpdate + 1);
    setCount((prevUpdate) => prevUpdate + 1);
    setCount((prevUpdate) => prevUpdate + 1);
    setCount((prevUpdate) => prevUpdate + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="px-6 py-2 ">
      <div className="max-w-md mx-auto p-4">
        <div className="text-2xl font-semibold mb-4">Count: {count}</div>

        <label htmlFor="simpleIncrement" className="block mb-2">
          Simple Increment:
        </label>
        <button
          id="simpleIncrement"
          className="px-2 py-1 bg-green-500 rounded text-white font-bold uppercase hover:bg-green-600"
          onClick={increament}
        >
          Increment
        </button>

        <hr className="my-4" />

        <label htmlFor="multipleSetCount" className="block mb-2">
          Increment with Multiple Set Count:
        </label>
        <button
          id="multipleSetCount"
          className="px-2 py-1 bg-green-500 rounded text-white font-bold uppercase hover:bg-green-600"
          onClick={increament}
        >
          Increment
        </button>

        <hr className="my-4" />

        <label htmlFor="prevValueSetCount" className="block mb-2">
          Increment with Previous Value Set Count:
        </label>
        <button
          id="prevValueSetCount"
          className="px-2 py-1 bg-green-500 rounded text-white font-bold uppercase hover:bg-green-600"
          onClick={increamentWithCallback}
        >
          Increment
        </button>

        <hr className="my-4" />

        <button
          className="px-2 py-1 bg-red-500 rounded text-white font-bold uppercase hover:bg-red-600"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>

      <div class="max-w-3xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-4">
          React State Updates and Batching
        </h1>

        <p class="text-gray-700">
          When we work with state in React, it's essential to understand how
          state updates are batched. Consider the following scenario:
        </p>

        <ol class="list-decimal pl-6 mt-4">
          <li>
            You have a counter (
            <code class="bg-gray-200 px-1 rounded">count</code>) that you want
            to increment by 1.
          </li>
          <li>
            You call{" "}
            <code class="bg-gray-200 px-1 rounded">setCount(count + 1)</code>{" "}
            multiple times in a row.
          </li>
        </ol>

        <h2 class="text-xl font-semibold mt-6">The Expected Behavior</h2>
        <p class="text-gray-700">
          You might assume that each call to{" "}
          <code class="bg-gray-200 px-1 rounded">setCount</code> would increase
          the count by 1, resulting in a total increase of 4 (since you've
          called it four times). However, React doesn't work that way.
        </p>

        <h2 class="text-xl font-semibold mt-6">React's Batching Mechanism</h2>
        <p class="text-gray-700">
          React batches state updates for performance reasons. When you call{" "}
          <code class="bg-gray-200 px-1 rounded">setCount(count + 1)</code>{" "}
          multiple times in a synchronous sequence (as in your example), React
          combines these updates into a single batch. It only performs the final
          update.
        </p>

        <h2 class="text-xl font-semibold mt-6">Why Does This Happen?</h2>
        <p class="text-gray-700">
          React optimizes state updates by minimizing the number of renders. If
          it sees multiple updates to the same state variable within the same
          event loop (such as a single function execution), it queues them up
          and applies them all at once. This behavior prevents unnecessary
          re-renders.
        </p>

        <h2 class="text-xl font-semibold mt-6">Accessing the Previous State</h2>
        <p class="text-gray-700">
          To ensure that each increment is correctly applied, you can use the
          functional form of{" "}
          <code class="bg-gray-200 px-1 rounded">setCount</code>:
        </p>
        <pre class="bg-gray-100 p-2 rounded">
          <code>setCount((prevCount) => prevCount + 1);</code>
        </pre>
        <p class="text-gray-700">
          By using the previous state (
          <code class="bg-gray-200 px-1 rounded">prevCount</code>), you avoid
          relying on the current value of{" "}
          <code class="bg-gray-200 px-1 rounded">count</code>. This approach
          guarantees that each increment is based on the correct previous value,
          even when updates are batched.
        </p>

        <p class="text-gray-700 mt-6">
          Note: React's batching behavior is a performance optimization, but
          understanding it helps us write more reliable code. 🚀
        </p>
      </div>
    </div>
  );
}

export default Question;
