type CreateProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
};
const ButtonCreateProduct = ({
  create,
  setCreate,
  onCreateProd,
}: {
  create: CreateProductType;
  setCreate: React.Dispatch<React.SetStateAction<CreateProductType>>;
  onCreateProd: () => void;
}) => {
  return (
    <>
      <input type="checkbox" id="drawer-right" className="drawer-toggle" />
      <label htmlFor="drawer-right" className="btn btn-primary bg-slate-400">
        Tambahkan
      </label>
      <label className="overlay" htmlFor="drawer-right"></label>
      <div className="drawer drawer-right">
        <div className="drawer-content pt-10 flex flex-col h-full">
          <label
            htmlFor="drawer-right"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h2 className="text-xl font-medium">Create new product</h2>
            <input
              className="input py-1.5 my-3"
              placeholder="ID"
              value={create.id}
              onChange={(event) =>
                setCreate({
                  ...create,
                  id: parseInt(event.target.value),
                })
              }
            />
            <input
              className="input py-1.5 my-3"
              placeholder="Name"
              value={create.name}
              onChange={(event) =>
                setCreate({
                  ...create,
                  name: event.target.value,
                })
              }
            />
            <input
              className="input py-1.5 my-3"
              placeholder="Price"
              value={create.price}
              onChange={(event) =>
                setCreate({
                  ...create,
                  price: parseInt(event.target.value),
                })
              }
            />
            <input
              className="input py-1.5 my-3"
              placeholder="Description"
              value={create.description}
              onChange={(event) =>
                setCreate({
                  ...create,
                  description: event.target.value,
                })
              }
            />
          </div>
          <div className="h-full flex flex-row justify-end items-end gap-2">
            <button className="btn btn-ghost">Cancel</button>
            <button
              className="btn btn-primary bg-green-500"
              onClick={() => onCreateProd()}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonCreateProduct;
