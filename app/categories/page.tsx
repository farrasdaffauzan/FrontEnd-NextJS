import AddCategories from "./addCategories";
import UpdateCategories from "./updateCategories";
import DeleteCategories from "./deleteCategories";
import ViewBooks from "../books/viewBooks";

export default async function categories() {
  return (
    <div className="">
      <div className="py-2 px-10">
        <AddCategories />
      </div>
      <div className="py-10 px-10">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Test</td>
              <td className="flex">
                <div className=" ms-2">
                  <UpdateCategories />
                </div>

                <div className=" ms-2">
                  <DeleteCategories />
                </div>

                <div className=" ms-2">
                  <ViewBooks />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
