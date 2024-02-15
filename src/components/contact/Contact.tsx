import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z}  from 'zod'

enum FieldNames {
  FULLNAME = 'fullname',
  MESSAGE = 'message',
}

const schema = z.object({
  [FieldNames.FULLNAME]: z.string(),
  [FieldNames.MESSAGE]: z.string(),
})

type FormFields = z.infer<typeof schema>

export const Contact = () => {
  const {register} = useForm<FormFields>({
    resolver: zodResolver(schema)
  })
  return (
    <div className="p-[32px]">
      <p>FORM</p>
      <form>
        <label htmlFor={FieldNames.FULLNAME}>Fullname</label>
        <input type="text" {...register(FieldNames.FULLNAME)} />
        <label htmlFor={FieldNames.MESSAGE}>Message</label>
        <input type="textarea" {...register(FieldNames.MESSAGE)} />
      </form>
    </div>
  )
}