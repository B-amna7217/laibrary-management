// File: src/app/(main)/about/aboutstudent/[studid]/page.jsx

export default function StudentPage({ params, searchParams }) {
  const { studid } = params;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Student ID: {studid}
      </h1>

      {searchParams && (
        <div style={{ marginTop: "10px" }}>
          <h2 style={{ fontSize: "18px" }}>Search Params:</h2>
          <pre>{JSON.stringify(searchParams, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
