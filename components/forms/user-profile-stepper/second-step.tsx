'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  type ProfileFormValues,
  type ProfileContries,
  type ProfileCities
} from '@/lib/form-schema';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

const SecondStep = ({
  form,
  loading,
  fields,
  append,
  remove,
  errors,
  countries,
  cities
}: {
  form: any;
  loading: boolean;
  fields: ProfileFormValues['jobs'];
  append: any;
  remove: any;
  errors: any;
  countries: ProfileContries[];
  cities: ProfileCities[];
}) => {
  return (
    <>
      {fields?.map((field, index) => (
        <Accordion type="single" collapsible defaultValue="item-1" key={index}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              className={cn(
                'relative !no-underline [&[data-state=closed]>button]:hidden [&[data-state=open]>.alert]:hidden',
                errors?.jobs?.[index] && 'text-red-700'
              )}
            >
              {`Experiencia Laboral ${index + 1}`}

              <Button
                variant="outline"
                size="icon"
                className="absolute right-8"
                onClick={() => remove(index)}
              >
                <Icons.trash className="h-4 w-4 " />
              </Button>
              {errors?.jobs?.[index] && (
                <span className="alert absolute right-8">
                  <Icons.warning className="h-4 w-4 text-red-700" />
                </span>
              )}
            </AccordionTrigger>
            <AccordionContent>
              <div
                className={cn(
                  'relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-3'
                )}
              >
                <FormField
                  control={form.control}
                  name={`jobs.${index}.jobtitle`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título del trabajo</FormLabel>
                      <FormControl>
                        <Input type="text" disabled={loading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`jobs.${index}.employer`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empleador</FormLabel>
                      <FormControl>
                        <Input type="text" disabled={loading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`jobs.${index}.startdate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de inicio</FormLabel>
                      <FormControl>
                        <Input type="date" disabled={loading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`jobs.${index}.enddate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de finalización</FormLabel>
                      <FormControl>
                        <Input type="date" disabled={loading} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`jobs.${index}.jobcountry`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>País del trabajo</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              defaultValue={field.value}
                              placeholder="Seleccione su país de trabajo"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.id} value={country.id}>
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`jobs.${index}.jobcity`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ciudad del trabajo</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              defaultValue={field.value}
                              placeholder="Seleccione su ciudad de trabajo"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city.id} value={city.id}>
                              {city.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <div className="mt-4 flex justify-center">
        <Button
          type="button"
          className="flex justify-center"
          size={'lg'}
          onClick={() =>
            append({
              jobtitle: '',
              employer: '',
              startdate: '',
              enddate: '',
              jobcountry: '',
              jobcity: ''
            })
          }
        >
          Agregar Más
        </Button>
      </div>
    </>
  );
};

export { SecondStep };
