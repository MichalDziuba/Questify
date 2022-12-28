type questCategoryProps = {
  handleChangeCategories: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  questCategory: string;
};


export const QuestCategory = ({
  questCategory,
  handleChangeCategories,
}: questCategoryProps) => {
  return (
    <select
      name="categories"
      onChange={handleChangeCategories}
      className="bg-[#B9C3C8] p-1 rounded-r-xl"
      defaultValue={questCategory}
    >
      <option value="stuff">STUFF</option>
      <option value="family">FAMILY</option>
      <option value="health">HEALTH</option>
      <option value="learning">LEARNING</option>
      <option value="leisure">LEISURE</option>
      <option value="work">WORK</option>
    </select>
  );
};