import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type RoleDropDownProps = {
  value: string;
  onChange: (value: string) => void;
};

export function RoleDropDown({ value, onChange }: RoleDropDownProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-24 h-8">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="agent">agent</SelectItem>
        <SelectItem value="supervisor">supervisor</SelectItem>
      </SelectContent>
    </Select>
  );
}
