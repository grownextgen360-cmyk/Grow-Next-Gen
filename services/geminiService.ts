import { GoogleGenAI, Type } from "@google/genai";

// Initialize the Google GenAI client following strict initialization guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Performs a professional growth audit for a business.
 * Uses gemini-3-pro-preview as this task involves complex reasoning and strategy.
 */
export async function generateFreeAudit(businessName: string, website: string, industry: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Perform a professional growth audit for ${businessName} (${website}) in the ${industry} industry. 
      Analyze potential areas for improvement in: 
      1. Digital Marketing Presence
      2. Conversion Rate Optimization
      3. Social Media Strategy
      4. Website Performance.
      Provide actionable 'Quick Wins' and a 'Long-term Growth Strategy'.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING, description: "Detailed analysis of current presence" },
            quickWins: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Actionable immediate improvements"
            },
            strategy: { type: Type.STRING, description: "Overarching long-term strategy" },
            score: { type: Type.NUMBER, description: "A score from 1-10 of current digital presence" }
          },
          required: ["analysis", "quickWins", "strategy", "score"]
        }
      }
    });

    // Use the .text property to access the generated content
    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating audit:", error);
    throw error;
  }
}