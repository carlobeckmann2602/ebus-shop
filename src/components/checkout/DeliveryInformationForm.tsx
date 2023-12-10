export default function DeliveryInformationForm() {
  // email
  // country
  // firstname - lastname
  // street houseNumber
  // postcode - city
  return (
    <form className="flex flex-col form-control">
      <label className="w-full">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="text"
          placeholder="max.mustermann@mail.com"
          className="input input-bordered w-full"
          disabled
        />
      </label>
      <label className="w-full">
        <div className="label">
          <span className="label-text">Land</span>
        </div>
        <input
          type="text"
          placeholder="Deutschland"
          className="input input-bordered w-full"
          disabled
        />
      </label>
      <div className="flex flex-row gap-2">
        <label className="w-full">
          <div className="label">
            <span className="label-text">Vorname</span>
          </div>
          <input
            type="text"
            placeholder="Max"
            className="input input-bordered w-full"
            disabled
          />
        </label>
        <label className="w-full">
          <div className="label">
            <span className="label-text">Nachname</span>
          </div>
          <input
            type="text"
            placeholder="Mustermann"
            className="input input-bordered w-full"
            disabled
          />
        </label>
      </div>
      <label className="w-full">
        <div className="label">
          <span className="label-text">Straße & Hausnummer</span>
        </div>
        <input
          type="text"
          placeholder="Musterstraße 34"
          className="input input-bordered w-full"
          disabled
        />
      </label>
      <div className="flex flex-row gap-2">
        <label className="w-full">
          <div className="label">
            <span className="label-text">Postleitzahl</span>
          </div>
          <input
            type="text"
            placeholder="12345"
            className="input input-bordered w-full"
            disabled
          />
        </label>
        <label className="w-full">
          <div className="label">
            <span className="label-text">Stadt</span>
          </div>
          <input
            type="text"
            placeholder="Musterstadt"
            className="input input-bordered w-full"
            disabled
          />
        </label>
      </div>
    </form>
  );
}
