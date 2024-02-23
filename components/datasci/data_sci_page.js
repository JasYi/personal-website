import "../right_page.css";

export default function DataSciPage() {
  return (
    <>
      <h2 class="mb-2 text-3xl font-medium text-black">
        I find the process of working with data extremely rewarding. Previously
        I’ve:
      </h2>
      <ul class="text-lg max-w-md space-y-1 text-gray-700 list-disc list-inside">
        <li>Created data science curriculum for 300+ students</li>
        <li>
          Developed a scoring methodology for neighborhoods using text
          clustering with Word2Vec on Google Reviews
        </li>
        <li>
          Crafted a matching algorithm for a club wide “Marriage Pact” to pair
          members together based on Google Form answers
        </li>
      </ul>
    </>
  );
}
