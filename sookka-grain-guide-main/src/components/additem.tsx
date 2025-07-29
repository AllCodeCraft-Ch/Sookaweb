import React, { useState } from "react";

type Benefit = { title: string; detail: string };
type Recipe = { title: string; steps: string; imageURL: string };
type StorageTip = { tip: string };

export default function AddNewItemPage() {
  const [benefits, setBenefits] = useState<Benefit[]>([{ title: "", detail: "" }]);
  const [recipes, setRecipes] = useState<Recipe[]>([{ title: "", steps: "", imageURL: "" }]);
  const [storageTips, setStorageTips] = useState<StorageTip[]>([{ tip: "" }]);

  // Update dynamic fields handlers
  const updateBenefit = (index: number, field: keyof Benefit, value: string) => {
    const newBenefits = [...benefits];
    newBenefits[index][field] = value;
    setBenefits(newBenefits);
  };
  const addBenefit = () => setBenefits([...benefits, { title: "", detail: "" }]);
  const removeBenefit = (index: number) => {
    if (benefits.length === 1) return;
    setBenefits(benefits.filter((_, i) => i !== index));
  };

  const updateRecipe = (index: number, field: keyof Recipe, value: string) => {
    const newRecipes = [...recipes];
    newRecipes[index][field] = value;
    setRecipes(newRecipes);
  };
  const addRecipe = () => setRecipes([...recipes, { title: "", steps: "", imageURL: "" }]);
  const removeRecipe = (index: number) => {
    if (recipes.length === 1) return;
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  const updateStorageTip = (index: number, value: string) => {
    const newStorageTips = [...storageTips];
    newStorageTips[index].tip = value;
    setStorageTips(newStorageTips);
  };
  const addStorageTip = () => setStorageTips([...storageTips, { tip: "" }]);
  const removeStorageTip = (index: number) => {
    if (storageTips.length === 1) return;
    setStorageTips(storageTips.filter((_, i) => i !== index));
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      typeFootID: (document.getElementById("typeFootID") as HTMLSelectElement).value,
      description: (document.getElementById("description") as HTMLTextAreaElement).value,
      imageURL: (document.getElementById("imageURL") as HTMLInputElement).value,
      caloriesPerCup: (document.getElementById("caloriesPerCup") as HTMLInputElement).value,
      proteinPerCup: (document.getElementById("proteinPerCup") as HTMLInputElement).value,
      fiberPerCup: (document.getElementById("fiberPerCup") as HTMLInputElement).value,
      nutrition: {
        protein: (document.getElementById("nutrition_protein") as HTMLSelectElement).value,
        dietaryFiber: (document.getElementById("nutrition_dietaryFiber") as HTMLSelectElement).value,
        iron: (document.getElementById("nutrition_iron") as HTMLInputElement).value,
        phosphorus: (document.getElementById("nutrition_phosphorus") as HTMLInputElement).value,
        carbohydrates: (document.getElementById("nutrition_carbohydrates") as HTMLInputElement).value,
        totalFat: (document.getElementById("nutrition_totalFat") as HTMLInputElement).value,
        magnesium: (document.getElementById("nutrition_magnesium") as HTMLInputElement).value,
        folate: (document.getElementById("nutrition_folate") as HTMLInputElement).value,
      },
      benefits,
      recipes,
      storageTips,
    };

    console.log("Form data to be submitted:", formData);
    alert("Item data prepared for submission! Check console for the data structure.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F5F3] to-[#FEFEFE] font-sans text-gray-800 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#F6F5F3]/80 backdrop-blur-lg border-b border-[#8E9775]/10 z-50 py-4">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-extrabold bg-gradient-to-r from-[#8E9775] to-[#6B7353] text-transparent bg-clip-text"
          >
            Sookka
          </a>
        </div>
      </nav>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto mt-32 px-4 md:px-0 space-y-10">
        {/* Basic Information */}
        <section className="bg-white/80 backdrop-blur-lg border border-[#8E9775]/10 rounded-3xl shadow-2xl p-8 space-y-6">
          <h2 className="text-xl font-bold text-[#8E9775] flex items-center gap-2">
            <span className="w-1.5 h-5 bg-gradient-to-b from-[#8E9775] to-[#B2B09B] rounded" />
            Basic Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Food Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. ข้าวกล้อง"
                required
              />
            </div>
            <div>
              <label htmlFor="typeFootID" className="block font-semibold mb-2">
                Food Type
              </label>
              <select
                id="typeFootID"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                required
              >
                <option value="">Select a type</option>
                <option value="1">Grains</option>
                <option value="2">Vegetables</option>
                <option value="3">Fruits</option>
                <option value="4">Proteins</option>
                <option value="5">Dairy</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70 min-h-[120px]"
              placeholder="e.g. ข้าวกล้องมีประโยชน์ต่อสุขภาพ"
            />
          </div>

          <div>
            <label htmlFor="imageURL" className="block font-semibold mb-2">
              Image URL
            </label>
            <input
              type="url"
              id="imageURL"
              className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
              placeholder="https://example.com/rice.jpg"
            />
          </div>
        </section>

        {/* Nutritional Information */}
        <section className="bg-white/80 backdrop-blur-lg border border-[#8E9775]/10 rounded-3xl shadow-2xl p-8 space-y-6">
          <h2 className="text-xl font-bold text-[#8E9775] flex items-center gap-2">
            <span className="w-1.5 h-5 bg-gradient-to-b from-[#8E9775] to-[#B2B09B] rounded" />
            Nutritional Information (per cup)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="caloriesPerCup" className="block font-semibold mb-2">
                Calories
              </label>
              <input
                type="number"
                id="caloriesPerCup"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. 200"
              />
            </div>
            <div>
              <label htmlFor="proteinPerCup" className="block font-semibold mb-2">
                Protein (g)
              </label>
              <input
                type="number"
                step="0.1"
                id="proteinPerCup"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. 4.5"
              />
            </div>
            <div>
              <label htmlFor="fiberPerCup" className="block font-semibold mb-2">
                Fiber (g)
              </label>
              <input
                type="number"
                step="0.1"
                id="fiberPerCup"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. 3.2"
              />
            </div>
          </div>

          {/* Detailed Nutrition */}
          <h3 className="text-lg font-bold text-[#8E9775] mt-8 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-gradient-to-b from-[#8E9775] to-[#B2B09B] rounded" />
            Detailed Nutrition
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label htmlFor="nutrition_protein" className="block font-semibold mb-2">
                Protein Level
              </label>
              <select
                id="nutrition_protein"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
              >
                <option value="">Select level</option>
                <option value="สูง">สูง</option>
                <option value="ปานกลาง">ปานกลาง</option>
                <option value="ต่ำ">ต่ำ</option>
              </select>
            </div>
            <div>
              <label htmlFor="nutrition_dietaryFiber" className="block font-semibold mb-2">
                Dietary Fiber Level
              </label>
              <select
                id="nutrition_dietaryFiber"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
              >
                <option value="">Select level</option>
                <option value="สูง">สูง</option>
                <option value="ปานกลาง">ปานกลาง</option>
                <option value="ต่ำ">ต่ำ</option>
              </select>
            </div>
            <div>
              <label htmlFor="nutrition_iron" className="block font-semibold mb-2">
                Iron (mg)
              </label>
              <input
                type="number"
                step="0.1"
                id="nutrition_iron"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. 2.5"
              />
            </div>
            <div>
              <label htmlFor="nutrition_phosphorus" className="block font-semibold mb-2">
                Phosphorus (mg)
              </label>
              <input
                type="number"
                step="0.1"
                id="nutrition_phosphorus"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. 120"
              />
            </div>
            <div>
              <label htmlFor="nutrition_carbohydrates" className="block font-semibold mb-2">
                Carbohydrates (g)
              </label>
              <input
                type="number"
                step="0.1"
                id="nutrition_carbohydrates"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. 45.3"
              />
            </div>
            <div>
              <label htmlFor="nutrition_totalFat" className="block font-semibold mb-2">
                Total Fat (g)
              </label>
              <input
                type="number"
                step="0.1"
                id="nutrition_totalFat"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. 1.2"
              />
            </div>
            <div>
              <label htmlFor="nutrition_magnesium" className="block font-semibold mb-2">
                Magnesium (mg)
              </label>
              <input
                type="number"
                step="0.1"
                id="nutrition_magnesium"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. 85"
              />
            </div>
            <div>
              <label htmlFor="nutrition_folate" className="block font-semibold mb-2">
                Folate (mcg)
              </label>
              <input
                type="number"
                step="0.1"
                id="nutrition_folate"
                className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. 90"
              />
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="bg-white/80 backdrop-blur-lg border border-[#8E9775]/10 rounded-3xl shadow-2xl p-8 space-y-6">
          <h2 className="text-xl font-bold text-[#8E9775] flex items-center gap-2">
            <span className="w-1.5 h-5 bg-gradient-to-b from-[#8E9775] to-[#B2B09B] rounded" />
            Health Benefits
          </h2>

          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-4 items-end mb-4">
              <div className="flex-1 grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2" htmlFor={`benefit-title-${idx}`}>
                    Benefit Title
                  </label>
                  <input
                    type="text"
                    id={`benefit-title-${idx}`}
                    className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                    placeholder="e.g. ดีต่อหัวใจ"
                    value={benefit.title}
                    onChange={(e) => updateBenefit(idx, "title", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2" htmlFor={`benefit-detail-${idx}`}>
                    Benefit Detail
                  </label>
                  <input
                    type="text"
                    id={`benefit-detail-${idx}`}
                    className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                    placeholder="e.g. ช่วยลดไขมันในเลือด"
                    value={benefit.detail}
                    onChange={(e) => updateBenefit(idx, "detail", e.target.value)}
                  />
                </div>
              </div>
              <button
                type="button"
                className="bg-red-400 text-white rounded-xl px-4 py-2 hover:bg-red-500 transition"
                onClick={() => removeBenefit(idx)}
                aria-label="Remove Benefit"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#8E9775]/20 text-[#8E9775] rounded-xl font-semibold hover:bg-[#8E9775]/40 transition"
            onClick={addBenefit}
          >
            ＋ Add Benefit
          </button>
        </section>

        {/* Recipes */}
        <section className="bg-white/80 backdrop-blur-lg border border-[#8E9775]/10 rounded-3xl shadow-2xl p-8 space-y-6">
          <h2 className="text-xl font-bold text-[#8E9775] flex items-center gap-2">
            <span className="w-1.5 h-5 bg-gradient-to-b from-[#8E9775] to-[#B2B09B] rounded" />
            Recipes
          </h2>

          {recipes.map((recipe, idx) => (
            <div key={idx} className="flex gap-4 items-end mb-4">
              <div className="flex-1 space-y-4">
                <div>
                  <label className="block font-semibold mb-2" htmlFor={`recipe-title-${idx}`}>
                    Recipe Title
                  </label>
                  <input
                    type="text"
                    id={`recipe-title-${idx}`}
                    className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                    placeholder="e.g. ข้าวกล้องผัดไข่"
                    value={recipe.title}
                    onChange={(e) => updateRecipe(idx, "title", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2" htmlFor={`recipe-steps-${idx}`}>
                    Steps
                  </label>
                  <textarea
                    id={`recipe-steps-${idx}`}
                    className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70 min-h-[100px]"
                    placeholder="e.g. 1. หุงข้าว\n2. ผัดกับไข่"
                    value={recipe.steps}
                    onChange={(e) => updateRecipe(idx, "steps", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2" htmlFor={`recipe-image-${idx}`}>
                    Image URL
                  </label>
                  <input
                    type="url"
                    id={`recipe-image-${idx}`}
                    className="w-full p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                    placeholder="https://example.com/dish.jpg"
                    value={recipe.imageURL}
                    onChange={(e) => updateRecipe(idx, "imageURL", e.target.value)}
                  />
                </div>
              </div>
              <button
                type="button"
                className="bg-red-400 text-white rounded-xl px-4 py-2 hover:bg-red-500 transition self-start"
                onClick={() => removeRecipe(idx)}
                aria-label="Remove Recipe"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#8E9775]/20 text-[#8E9775] rounded-xl font-semibold hover:bg-[#8E9775]/40 transition"
            onClick={addRecipe}
          >
            ＋ Add Recipe
          </button>
        </section>

        {/* Storage Tips */}
        <section className="bg-white/80 backdrop-blur-lg border border-[#8E9775]/10 rounded-3xl shadow-2xl p-8 space-y-6">
          <h2 className="text-xl font-bold text-[#8E9775] flex items-center gap-2">
            <span className="w-1.5 h-5 bg-gradient-to-b from-[#8E9775] to-[#B2B09B] rounded" />
            Storage Tips
          </h2>

          {storageTips.map((tip, idx) => (
            <div key={idx} className="flex gap-4 items-center mb-4">
              <input
                type="text"
                className="flex-1 p-4 border border-[#8E9775]/30 rounded-xl bg-white/70"
                placeholder="e.g. เก็บในที่แห้งและเย็น"
                value={tip.tip}
                onChange={(e) => updateStorageTip(idx, e.target.value)}
              />
              <button
                type="button"
                className="bg-red-400 text-white rounded-xl px-4 py-2 hover:bg-red-500 transition"
                onClick={() => removeStorageTip(idx)}
                aria-label="Remove Storage Tip"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#8E9775]/20 text-[#8E9775] rounded-xl font-semibold hover:bg-[#8E9775]/40 transition"
            onClick={addStorageTip}
          >
            ＋ Add Storage Tip
          </button>
        </section>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-6 py-3 rounded-xl border border-[#8E9775]/20 text-gray-500 bg-white/70 hover:bg-[#8E9775]/10 transition"
            onClick={() => window.location.reload()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#8E9775] to-[#6B7353] text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition"
          >
            Save Item
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-10 mt-24 text-center">
        <p>&copy; 2025 Sookka. Empowering healthy choices through knowledge.</p>
      </footer>
    </div>
  );
}
