import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'donations',
  timestamps: true,
})
export class Donation extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  paymentReference!: string;
}
