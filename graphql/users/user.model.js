import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const userSchema = new Schema(
  {
    fullname: { type: String },
    address: { type: String },
    institute: { type: String },
    job_title: { type: String },
    phone: { type: String },
    birth_date: { type: String },
    reset_token: { type: String },
    is_data_completed: { type: Boolean },
    is_email_verified: { type: Boolean },
    roles: [
      {
        type: String,
        enum: [
          'Super_Admin',
          'Super_Admin_Layanan_Pengujian',
          'Admin_Pemesanan',
          'Analis',
          'Penyedia',
          'Korbid_Pengujian',
          'Kepala_PLT',
          'Super_Admin_Stock_Opname',
          'Admin_Stock_Opname_Agripa',
          'Admin_Stock_Opname_Tisimat',
          'Admin_Stock_Opname_Tambang',
          'Admin_Stock_Opname_Pengujian'
        ]
      }
    ],
    NIP: { type: String },
    signature_image_path: { type: String },
    email: { type: String },
    password: { type: String },
    auth_token: [
      {
        type: String,
        default: []
      }
    ],
    salt: { type: String }
  },
  {
    timestamps: true,
    toJSON: {
      getters: true
    },
    toObject: {
      getters: true
    }
  }
)

export default model('user', userSchema)