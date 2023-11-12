import Logo from '../../assets/imgs/logo.svg'

export function Header() {
  return (
    <div className="w-full h-[296px] flex items-center justify-center bg-header-img bg-no-repeat bg-cover">
      <img src={Logo} alt="" />
    </div>
  )
}
