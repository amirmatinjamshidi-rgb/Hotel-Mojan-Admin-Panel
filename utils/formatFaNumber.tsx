export const faNumber = new Intl.NumberFormat("fa-IR");

export const formatFaNumber = (value: number) => faNumber.format(value);
export const fromFaNumber = (value: string) =>
  Number(
    value
      .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
      .replace(/,/g, "")
  );
