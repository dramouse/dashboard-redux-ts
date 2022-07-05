import { TaskSection } from "types/Server.types";

export const getNextTaskSection = (section: TaskSection) => {
  switch (section) {
    case TaskSection.BACKLOG:
      return TaskSection.PROGRESS
    case TaskSection.PROGRESS:
      return TaskSection.DONE
    // Такого случиться не должно, но на всякий
    case TaskSection.DONE:
      return TaskSection.DONE
  }
}

export const getPrevTaskSection = (section: TaskSection) => {
  switch (section) {
    case TaskSection.DONE:
      return TaskSection.PROGRESS
    case TaskSection.PROGRESS:
      return TaskSection.BACKLOG
    // Такого случиться не должно, но на всякий
    case TaskSection.BACKLOG:
      return TaskSection.BACKLOG
  }
}