import { Button } from "./ui/button";
import { CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const RegisterForm = () => {
  return (
    <CardContent className="px-0">
      <form>
        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Ad</Label>
              <Input id="first-name" type="text" placeholder="Ahmet" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Soyad</Label>
              <Input id="last-name" type="text" placeholder="Yılmaz" required />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company">Firma</Label>
              <Input id="company" type="text" placeholder="Şirket Adı" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input id="phone" type="tel" placeholder="05xx xxx xx xx" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-posta</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Şifre</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Kayıt Ol
          </Button>
        </div>
      </form>
    </CardContent>
  );
};
