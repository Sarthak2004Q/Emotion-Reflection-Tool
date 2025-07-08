import { useState } from "react";
import axios from "axios";

const EmotionForm = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{emotion: string, confidence: number} | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError("");
    try {
      const res = await axios.post("http://127.0.0.1:8000/analyze", { text });
      setResult(res.data);
    } catch (err) {
      setError("Error analyzing emotion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="border rounded p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="How are you feeling today?"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          {loading ? "Analyzing..." : "Submit"}
        </button>
      </form>

      {error && <div className="text-red-500 mt-4">{error}</div>}

      {result && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <p><strong>Emotion:</strong> {result.emotion}</p>
          <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
};

export default EmotionForm;
