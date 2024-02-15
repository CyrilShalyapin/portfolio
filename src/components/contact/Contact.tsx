import {useForm} from 'react-hook-form'
import {z}  from 'zod'

enum FieldNames {
  FULLNAME = 'fullname'
}

const schema = z.object({
  [FieldNames.FULLNAME]: z.string()
})

type FormFields = z.infer<typeof schema>

export const Contact = () => {
  const {register} = useForm<FormFields>()
  return (
    <div className="p-[32px]">
      <form action="">
        <input type="text" {...register(FieldNames.FULLNAME)} />
      </form>
    </div>
  )
}