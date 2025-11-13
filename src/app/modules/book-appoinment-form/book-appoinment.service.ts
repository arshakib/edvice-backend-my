import httpStatus from "http-status";
import ApiError from "../../../errors/Apierror";
import BookAppointment from "./book-appoinment.model";
import { IBookAppointment } from "./book-appoinment.interface";


interface BookAppointmentInput {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  nationality: string;
  studyLocation: string;
  yearsOfStudy: string;
  typeOfStudy: string;
  preferredSubjects?: string[];
  referralSource: string;
  livingInUK: string;
}

export class BookAppointmentService {
  /**
   * Create a new book appointment submission
   */
  static async createBookAppointment(input: BookAppointmentInput): Promise<IBookAppointment> {
    const bookAppointment = await BookAppointment.create({ ...input });
    return bookAppointment;
  }

  /**
   * Get all book appointment submissions
   */
  static async getAllBookAppointments(): Promise<IBookAppointment[]> {
    const bookAppointments = await BookAppointment.find();
    return bookAppointments;
  }

  /**
   * Get a single book appointment submission by ID
   */
  static async getBookAppointmentById(id: string): Promise<IBookAppointment> {
    const bookAppointment = await BookAppointment.findById(id);
    if (!bookAppointment) {
      throw new ApiError(httpStatus.NOT_FOUND, "Book appointment submission not found");
    }
    return bookAppointment;
  }

  /*
  /**
//    * Update a book appointment submission by ID
//    */
//   static async updateBookAppointment(
//     id: string,
//     input: Partial<BookAppointmentInput>,
//     userId: string
//   ): Promise<IBookAppointment> {
//     const bookAppointment = await BookAppointment.findById(id);
//     if (!bookAppointment) {
//       throw new ApiError(httpStatus.NOT_FOUND, "Book appointment submission not found");
//     }

//     // Optional: Add authorization check to ensure user can update this submission
//     // if (bookAppointment.createdBy.toString() !== userId) {
//     //   throw new ApiError(httpStatus.FORBIDDEN, "Not authorized to update this submission");
//     // }

//     const updatedBookAppointment = await BookAppointment.findByIdAndUpdate(id, input, { new: true });
//     if (!updatedBookAppointment) {
//       throw new ApiError(httpStatus.NOT_FOUND, "Book appointment submission not found");
//     }
//     return updatedBookAppointment;
//   }
//   */
}