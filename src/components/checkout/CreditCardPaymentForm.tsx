export default function CreditCardPaymentForm() {
  return (
    <div className="flex flex-col gap-2 w-full form-control">
      <label className="w-full">
        <div className="label">
          <span className="label-text">Kartennummer</span>
        </div>
        <input
          type="text"
          placeholder="0000 0000 0000 0000"
          className="input input-bordered w-full"
        />
      </label>
      <div className="flex flex-row gap-2">
        <label className="w-full">
          <div className="label">
            <span className="label-text">Ablaufdatum</span>
          </div>
          <input
            type="text"
            placeholder="MM /YY"
            className="input input-bordered w-full"
          />
        </label>
        <label className="w-full">
          <div className="label">
            <span className="label-text">Sicherheitsnummer</span>
          </div>
          <input
            type="text"
            placeholder="XXX"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <label className="w-full">
        <div className="label">
          <span className="label-text">Name</span>
        </div>
        <input
          type="text"
          placeholder="Name auf der Kreditkarte"
          className="input input-bordered w-full"
        />
      </label>
    </div>
  );
}
