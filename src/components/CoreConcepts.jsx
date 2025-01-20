import CoreConcept from "./CoreConcept.jsx"; // Singular component
import { CORE_CONCEPTS } from "../data.js"; // Import the core concepts data

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} /> // Render child component
        ))}
      </ul>
    </section>
  );
}
