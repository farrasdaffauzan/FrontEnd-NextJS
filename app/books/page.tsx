import AddBooks from "./addBooks";
import UpdateBooks from "./updateBooks";
import DeleteBooks from "./deleteBooks";

export default async function Books() {
  return (
    <div className="">
      <div className="py-2 px-10">
        <AddBooks />
      </div>
      <div className="py-10 px-10">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image URL</th>
              <th>Release</th>
              <th>Price</th>
              <th>Total Page</th>
              <th>Thickness</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td className="flex">
                <div className=" ms-2">
                  <UpdateBooks />
                </div>

                <div className=" ms-2">
                  <DeleteBooks />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
