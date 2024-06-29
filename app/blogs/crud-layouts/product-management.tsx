import {
  Accordion,
  Badge,
  Button,
  Checkbox,
  Dropdown,
  Label,
  Pagination,
  Radio,
  Rating,
  Select,
  Table,
  TextInput,
  ToggleSwitch,
  Tooltip,
  theme,
} from "flowbite-react";
import { useState } from "react";
import { HiCog, HiInformationCircle, HiSearch } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function CRUDLayoutForProductManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isNorthAmerica, setNorthAmerica] = useState(true);
  const [isSouthAmerica, setSouthAmerica] = useState(false);
  const [isAsia, setAsia] = useState(false);
  const [isAustralia, setAustralia] = useState(true);
  const [isEurope, setEurope] = useState(false);

  function check(id: string) {
    (document.querySelector(id) as HTMLInputElement).checked = true;
  }

  return (
    <section className="bg-gray-50 py-3 dark:bg-gray-900 sm:py-3">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col space-y-3 px-4 pt-3 lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0">
            <h5 className="flex gap-x-2">
              <span>
                <span className="text-gray-500">All Products:&nbsp;</span>
                <span className="dark:text-white">123456</span>
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                1-100 (436)
              </span>
              <Tooltip content="Showing 1-100 of 436 results">
                <HiInformationCircle className="mb-1 h-4 w-4 text-gray-400 hover:text-white" />
              </Tooltip>
            </h5>
            <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
              <Button color="gray" className="[&>span]:text-xs">
                <HiCog className="mr-2 h-4 w-4" />
                Table settings
              </Button>
            </div>
          </div>
          <div className="mx-4 my-3 border-t border-gray-200 pt-4 dark:border-gray-700">
            <div className="flex shrink-0 flex-col space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-between">
              <TextInput
                icon={() => (
                  <HiSearch className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                )}
                id="default-search"
                name="default-search"
                placeholder="Search for products"
                required
                type="search"
                className="flex-1 md:mr-32 [&_input]:py-2"
              />
              <div className="flex flex-col gap-y-2 md:flex-row md:space-x-3">
                <Button className="whitespace-nowrap">
                  <svg
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add product
                </Button>
                <Dropdown
                  color="gray"
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                        className="mr-2 h-4 w-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="whitespace-nowrap">Filter options</span>
                    </>
                  }
                  theme={{
                    floating: {
                      base: twMerge(
                        theme.dropdown.floating.base,
                        "w-80 rounded-lg",
                      ),
                      target: "w-full",
                    },
                  }}
                >
                  <div className="px-3">
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-sm font-medium text-black dark:text-white">
                        Filters
                      </p>
                      <div className="flex items-center space-x-3">
                        <a
                          href="#"
                          className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Save view
                        </a>
                        <a
                          href="#"
                          className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Clear all
                        </a>
                      </div>
                    </div>
                    <div className="pb-2 pt-3">
                      <Label
                        htmlFor="Checkbox-group-search"
                        className="sr-only"
                      >
                        Search
                      </Label>
                      <TextInput
                        icon={() => (
                          <svg
                            className="h-4 w-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        id="Checkbox-group-search"
                        name="Checkbox-group-search"
                        placeholder="Search keywords..."
                        className="[&_input]:py-2"
                      />
                    </div>
                    <Accordion flush className="dark:divide-gray-600">
                      <Accordion.Panel>
                        <Accordion.Title
                          theme={{
                            arrow: {
                              base: twMerge(
                                theme.accordion.title.arrow.base,
                                "h-5 w-5",
                              ),
                            },
                            base: "flex w-full items-center justify-between p-1 text-left text-sm text-gray-500 dark:text-gray-400",
                            open: {
                              off: "hover:bg-gray-100 dark:hover:bg-gray-600",
                              on: "font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                            },
                          }}
                        >
                          Category
                        </Accordion.Title>
                        <Accordion.Content className="p-1 dark:bg-transparent">
                          <div className="py-2 font-light">
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <Checkbox id="apple" name="apple" />
                                <Label
                                  htmlFor="apple"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Apple (56)
                                </Label>
                              </li>
                              <li className="flex items-center">
                                <Checkbox id="microsoft" name="microsoft" />
                                <Label
                                  htmlFor="microsoft"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Microsoft (45)
                                </Label>
                              </li>
                              <li className="flex items-center">
                                <Checkbox
                                  defaultChecked
                                  id="logitech"
                                  name="logitech"
                                />
                                <Label
                                  htmlFor="logitech"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Logitech (97)
                                </Label>
                              </li>
                              <li className="flex items-center">
                                <Checkbox id="sony" name="sony" />
                                <Label
                                  htmlFor="sony"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Sony (234)
                                </Label>
                              </li>
                              <li className="flex items-center">
                                <Checkbox
                                  defaultChecked
                                  id="asus"
                                  name="asus"
                                />
                                <Label
                                  htmlFor="asus"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Asus (97)
                                </Label>
                              </li>
                              <li className="flex items-center">
                                <Checkbox id="dell" name="dell" />
                                <Label
                                  htmlFor="dell"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Dell (56)
                                </Label>
                              </li>
                              <li className="flex items-center">
                                <Checkbox id="msi" name="msi" />
                                <Label
                                  htmlFor="msi"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  MSI (97)
                                </Label>
                              </li>
                              <li className="flex items-center">
                                <Checkbox
                                  defaultChecked
                                  id="canon"
                                  name="canon"
                                />
                                <Label
                                  htmlFor="canon"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Canon (49)
                                </Label>
                              </li>
                              <li className="flex items-center">
                                <Checkbox id="benq" name="benq" />
                                <Label
                                  htmlFor="benq"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  BenQ (23)
                                </Label>
                              </li>
                              <li className="flex items-center">
                                <Checkbox id="razer" name="razer" />
                                <Label
                                  htmlFor="razer"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Razer (49)
                                </Label>
                              </li>
                              <a
                                href="#"
                                className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                              >
                                View all
                              </a>
                            </ul>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title
                          theme={{
                            arrow: {
                              base: twMerge(
                                theme.accordion.title.arrow.base,
                                "h-5 w-5",
                              ),
                            },
                            base: "flex w-full items-center justify-between p-1 text-left text-sm text-gray-500 dark:text-gray-400",
                            open: {
                              off: "hover:bg-gray-100 dark:hover:bg-gray-600",
                              on: "font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                            },
                          }}
                        >
                          Price
                        </Accordion.Title>
                        <Accordion.Content className="p-1 dark:bg-transparent">
                          <div className="grid w-full grid-cols-2 items-center gap-x-3 py-2 font-light">
                            <Select
                              id="price-from"
                              name="price-from"
                              className="[&_select]:py-2 [&_select]:sm:text-xs"
                            >
                              <option disabled selected>
                                From
                              </option>
                              <option>$500</option>
                              <option>$2500</option>
                              <option>$5000</option>
                            </Select>
                            <Select
                              id="price-to"
                              name="price-to"
                              className="[&_select]:py-2 [&_select]:sm:text-xs"
                            >
                              <option disabled selected>
                                To
                              </option>
                              <option>$500</option>
                              <option>$2500</option>
                              <option>$5000</option>
                            </Select>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title
                          theme={{
                            arrow: {
                              base: twMerge(
                                theme.accordion.title.arrow.base,
                                "h-5 w-5",
                              ),
                            },
                            base: "flex w-full items-center justify-between p-1 text-left text-sm text-gray-500 dark:text-gray-400",
                            open: {
                              off: "hover:bg-gray-100 dark:hover:bg-gray-600",
                              on: "font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                            },
                          }}
                        >
                          Worldwide Shipping
                        </Accordion.Title>
                        <Accordion.Content className="p-1 dark:bg-transparent">
                          <div className="space-y-2 py-2">
                            <ToggleSwitch
                              checked={isNorthAmerica}
                              label="North America"
                              onChange={() => setNorthAmerica(!isNorthAmerica)}
                              sizing="sm"
                            />
                            <ToggleSwitch
                              checked={isSouthAmerica}
                              label="South America"
                              onChange={() => setSouthAmerica(!isSouthAmerica)}
                              sizing="sm"
                            />
                            <ToggleSwitch
                              checked={isAsia}
                              label="Asia"
                              onChange={() => setAsia(!isAsia)}
                              sizing="sm"
                            />
                            <ToggleSwitch
                              checked={isAustralia}
                              label="Australia"
                              onChange={() => setAustralia(!isAustralia)}
                              sizing="sm"
                            />
                            <ToggleSwitch
                              checked={isEurope}
                              label="Europe"
                              onChange={() => setEurope(!isEurope)}
                              sizing="sm"
                            />
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title
                          theme={{
                            arrow: {
                              base: twMerge(
                                theme.accordion.title.arrow.base,
                                "h-5 w-5",
                              ),
                            },
                            base: "flex w-full items-center justify-between p-1 text-left text-sm text-gray-500 dark:text-gray-400",
                            open: {
                              off: "hover:bg-gray-100 dark:hover:bg-gray-600",
                              on: "font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                            },
                          }}
                        >
                          Rating
                        </Accordion.Title>
                        <Accordion.Content className="space-y-2 px-1 py-3 dark:bg-transparent">
                          <div className="flex items-center gap-2">
                            <Radio id="five-stars" name="stars" />
                            <Rating onClick={() => check("#five-stars")}>
                              <Rating.Star />
                              <Rating.Star />
                              <Rating.Star />
                              <Rating.Star />
                              <Rating.Star />
                            </Rating>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio id="four-stars" name="stars" />
                            <Rating onClick={() => check("#four-stars")}>
                              <Rating.Star />
                              <Rating.Star />
                              <Rating.Star />
                              <Rating.Star />
                              <Rating.Star filled={false} />
                            </Rating>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio
                              defaultChecked
                              id="three-stars"
                              name="stars"
                            />
                            <Rating onClick={() => check("#three-stars")}>
                              <Rating.Star />
                              <Rating.Star />
                              <Rating.Star />
                              <Rating.Star filled={false} />
                              <Rating.Star filled={false} />
                            </Rating>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio id="two-stars" name="stars" />
                            <Rating onClick={() => check("#two-stars")}>
                              <Rating.Star />
                              <Rating.Star />
                              <Rating.Star filled={false} />
                              <Rating.Star filled={false} />
                              <Rating.Star filled={false} />
                            </Rating>
                          </div>
                          <div className="flex items-center gap-2">
                            <Radio id="one-stars" name="stars" />
                            <Rating onClick={() => check("#one-stars")}>
                              <Rating.Star />
                              <Rating.Star filled={false} />
                              <Rating.Star filled={false} />
                              <Rating.Star filled={false} />
                              <Rating.Star filled={false} />
                            </Rating>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                  </div>
                </Dropdown>
                <Dropdown
                  color="gray"
                  label="Actions"
                  theme={{
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "w-48"),
                      target: "w-full",
                    },
                  }}
                >
                  <Dropdown.Item>Mass Edit</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Delete All</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="whitespace-nowrap">
              <Table.Head>
                <Table.HeadCell
                  scope="col"
                  className="p-4 group-first/head:first:rounded-tl-none"
                >
                  <div className="flex items-center">
                    <Checkbox id="checkbox-all" name="checkbox-all" />
                    <Label htmlFor="checkbox-all" className="sr-only">
                      Select all
                    </Label>
                  </div>
                </Table.HeadCell>
                <Table.HeadCell
                  scope="col"
                  className="px-4 py-3.5 text-gray-500 dark:text-gray-400"
                >
                  Product
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-4 py-3.5">
                  Category
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-4 py-3.5">
                  Stock
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-4 py-3.5">
                  Sales/Day
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-4 py-3.5">
                  Sales/Month
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-4 py-3.5">
                  Rating
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-4 py-3.5">
                  Sales
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-4 py-3.5">
                  Revenue
                </Table.HeadCell>
                <Table.HeadCell
                  scope="col"
                  className="p-4 group-first/head:last:rounded-tr-none"
                >
                  Last Update
                </Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 p-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 27&#34;
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">
                    <Badge className="w-fit">Desktop PC</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-700"></div>
                      95
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    1.47
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    0.47
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </p>
                    </Rating>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-5 w-5 text-gray-400"
                        aria-hidden
                      >
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                      1.6M
                    </div>
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">$3.2M</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-4">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button color="gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-ml-0.5 mr-2 h-4 w-4"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                          />
                        </svg>
                        Preview
                      </Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3.5">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 20&quot;
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">
                    <Badge className="w-fit">Desktop PC</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-700"></div>
                      108
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    1.15
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    0.32
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </p>
                    </Rating>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-5 w-5 text-gray-400"
                        aria-hidden
                      >
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                      6M
                    </div>
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">$785K</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-4">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button color="gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-ml-0.5 mr-2 h-4 w-4"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                          />
                        </svg>
                        Preview
                      </Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3.5">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPhone 14
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">
                    <Badge className="w-fit">Phone</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 inline-block h-4 w-4 rounded-full bg-green-400"></div>
                      24
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    1.00
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    0.99
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        4.0
                      </p>
                    </Rating>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-5 w-5 text-gray-400"
                        aria-hidden
                      >
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                      1.2M
                    </div>
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">$3.2M</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-4">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button color="gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-ml-0.5 mr-2 h-4 w-4"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                          />
                        </svg>
                        Preview
                      </Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3.5">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-ipad-air.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPad Air
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">
                    <Badge className="w-fit">Tablet</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-700"></div>
                      287
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    0.47
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    1.00
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        4.0
                      </p>
                    </Rating>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-5 w-5 text-gray-400"
                        aria-hidden
                      >
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                      298K
                    </div>
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">$425K</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-4">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button color="gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-ml-0.5 mr-2 h-4 w-4"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                          />
                        </svg>
                        Preview
                      </Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3.5">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series S
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">
                    <Badge className="w-fit">Gaming/Console</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 inline-block h-4 w-4 rounded-full bg-yellow-300"></div>
                      450
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    1.61
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    0.30
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </p>
                    </Rating>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-5 w-5 text-gray-400"
                        aria-hidden
                      >
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                      99
                    </div>
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">$345K</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-4">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button color="gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-ml-0.5 mr-2 h-4 w-4"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                          />
                        </svg>
                        Preview
                      </Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3.5">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    PlayStation 5
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">
                    <Badge className="w-fit">Gaming/Console</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 inline-block h-4 w-4 rounded-full bg-green-400"></div>
                      2435
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    1.41
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    0.11
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        4.0
                      </p>
                    </Rating>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-5 w-5 text-gray-400"
                        aria-hidden
                      >
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                      2.1M
                    </div>
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">$4.2M</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-4">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button color="gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-ml-0.5 mr-2 h-4 w-4"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                          />
                        </svg>
                        Preview
                      </Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3.5">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series X
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">
                    <Badge className="w-fit">Gaming/Console</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 inline-block h-4 w-4 rounded-full bg-orange-400"></div>
                      235
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    7.09
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    3.32
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </p>
                    </Rating>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2 h-5 w-5 text-gray-400"
                        aria-hidden
                      >
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                      989K
                    </div>
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3.5">$2.27M</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center space-x-4">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button color="gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-ml-0.5 mr-2 h-4 w-4"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                          />
                        </svg>
                        Preview
                      </Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-ml-0.5 mr-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing&nbsp;
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>
              &nbsp;of&nbsp;
              <span className="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            <Pagination
              currentPage={currentPage}
              nextLabel=""
              onPageChange={(page) => setCurrentPage(page)}
              previousLabel=""
              showIcons
              totalPages={100}
              theme={{
                pages: {
                  base: twMerge(theme.pagination.pages.base, "mt-0"),
                  next: {
                    base: twMerge(
                      theme.pagination.pages.next.base,
                      "w-10 px-1.5 py-1.5",
                    ),
                    icon: "h-6 w-6",
                  },
                  previous: {
                    base: twMerge(
                      theme.pagination.pages.previous.base,
                      "w-10 px-1.5 py-1.5",
                    ),
                    icon: "h-6 w-6",
                  },
                  selector: {
                    base: twMerge(
                      theme.pagination.pages.selector.base,
                      "w-9 py-2 text-sm focus:border-blue-300",
                    ),
                  },
                },
              }}
            />
          </nav>
        </div>
      </div>
    </section>
  );
}
