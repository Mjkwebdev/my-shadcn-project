import { Input } from '../../components/ui/input'

const Searchbox = () => {
  return (
    <div>
        <Input
          type="text"
          className="w-[10rem] h-full px-4 border rounded-[20px_0px_0px_20px] border-none"
          placeholder="Quand"
        />
      </div>
  )
}

export default Searchbox