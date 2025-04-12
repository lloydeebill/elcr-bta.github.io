import React from "react";

const RegistrantFields = ({ values, handleChanges }) => {
	return (
		<div className="space-y-4">
			<div>
				<label className="text-sm font-bold text-gray-600 block mb-1">
					Full Name (Pangalan ng nagparehistro):
				</label>
				<input
					type="text"
					placeholder="Juan Dela Cruz Jr."
					name="fullname"
					onChange={handleChanges}
					required
					value={values.fullname}
					className="block w-full p-2 rounded text-sm border border-gray-300"
				/>
			</div>

			<div>
				<label className="text-sm font-bold text-gray-600 block mb-1">
					Relationship with the child/person to be registered:
				</label>
				<input
					type="text"
					placeholder="Parent"
					name="relationship"
					onChange={handleChanges}
					required
					value={values.relationship}
					className="block w-full p-2 rounded text-sm border border-gray-300"
				/>
			</div>

			<div>
				<label className="text-sm font-bold text-gray-600 block mb-1">
					Address:
				</label>
				<input
					type="text"
					placeholder="Enter Address"
					name="address"
					onChange={handleChanges}
					required
					value={values.address}
					className="block w-full p-2 rounded text-sm border border-gray-300"
				/>
			</div>

			<div>
				<label className="text-sm font-bold text-gray-600 block mb-1">
					Contact:
				</label>
				<input
					type="text"
					placeholder="Enter Phone Number"
					name="contact"
					onChange={handleChanges}
					required
					value={values.contact}
					className="block w-full p-2 rounded text-sm border border-gray-300"
				/>
			</div>

			<div>
				<label className="text-sm font-bold text-gray-600 block mb-1">
					Upload Valid ID:
				</label>
				<input
					type="file"
					name="image"
					onChange={handleChanges}
					className="block w-full text-sm"
				/>
			</div>
		</div>
	);
};

export default RegistrantFields;
