import mongoose from "mongoose";
import ContentDetail from "../models/contentDetail.js";
import ContentMaster from "../models/contentMaster.js";

export const createContentDetail = async (req, res) => {
    const {
        title,
        subTitle,
        url,
        contentMaster,
        length,
    } = req.body;

    const newModel = new ContentDetail({
        title,
        subTitle,
        url,
        contentMaster,
        length,
    });

    try {
        await newModel.save();
        var newContentDetailofMaster = await ContentMaster.findById({ _id: newModel.contentMaster })
        await ContentMaster.findByIdAndUpdate(newContentDetailofMaster._id, {
            contentMaster: newContentDetailofMaster._id
        });
        res.status(200).json({ code: true, result: newModel });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
