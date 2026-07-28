import { sampleDepartments } from "../data/sampleDepartments";
import { Department } from "../types/Department";

const STORAGE_KEY = "jwmc-departments";

function load(): Department[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    save(sampleDepartments);
    return [...sampleDepartments];
  }

  try {
    const departments = JSON.parse(stored) as Department[];

    if (departments.length === 0) {
      save(sampleDepartments);
      return [...sampleDepartments];
    }

    return departments;
  } catch {
    save(sampleDepartments);
    return [...sampleDepartments];
  }
}

function save(departments: Department[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(departments)
  );
}

let departments = load();

export const departmentService = {
  getAll(): Department[] {
    return [...departments];
  },

  getById(id: string): Department | undefined {
    return departments.find(
      (department) => department.id === id
    );
  },

  add(department: Department): void {
    departments.push(department);
    save(departments);
  },

  update(department: Department): void {
    departments = departments.map((item) =>
      item.id === department.id ? department : item
    );

    save(departments);
  },

  delete(id: string): void {
    departments = departments.filter(
      (department) => department.id !== id
    );

    save(departments);
  },
};